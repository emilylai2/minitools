# Flask Web 版練習系統
from flask import Flask, render_template_string, request, redirect, url_for, session
import json
import random
import os

app = Flask(__name__)
app.secret_key = 'kcsa-secret-key'

# 載入題庫
with open("kcsa_questions_sorted.json", encoding="utf-8") as f:
    question_pool = json.load(f)

WRONG_FILE = "wrong_questions.json"
if os.path.exists(WRONG_FILE):
    with open(WRONG_FILE, encoding="utf-8") as f:
        wrong_questions = json.load(f)
else:
    wrong_questions = []

def save_wrong_questions():
    with open(WRONG_FILE, "w", encoding="utf-8") as f:
        json.dump(wrong_questions, f, ensure_ascii=False, indent=2)

HTML_TEMPLATE = """
<!doctype html>
<html lang="zh-TW">
  <head>
    <meta charset="utf-8">
    <title>KCSA 練習系統</title>
    <style>
      body { font-family: sans-serif; max-width: 800px; margin: auto; padding: 2em; }
      .question { margin-bottom: 1em; }
      .explanation { color: blue; margin-top: 1em; white-space: pre-wrap; }
    </style>
  </head>
  <body>
    {% if question %}
      <form method="POST">
        <div class="question">
          <strong>題目 {{ index + 1 }}:</strong> {{ question['question'] }}
        </div>
        {% for option in question['options'] %}
          <div>
            <input type="checkbox" name="answer" value="{{ loop.index0 }}"> {{ option }}
          </div>
        {% endfor %}
        <br>
        <button type="submit">提交答案</button>
      </form>
      {% if explanation %}
        <div class="explanation">
          {{ explanation }}
        </div>
        <br><a href="{{ url_for('next_question') }}">下一題</a>
      {% endif %}
      <br><br>
      <a href="{{ url_for('reset') }}">🔄 重新開始練習</a>
    {% else %}
      <form method="POST" action="/start">
        <label>選擇模式：</label><br>
        <select name="mode">
          <option value="全部題庫">全部題庫</option>
          <option value="只練錯題">只練錯題</option>
          <option value="錯題反覆練習直到正確">錯題反覆練習直到正確</option>
        </select><br><br>
        <label>題目數量：</label>
        <input type="number" name="count" value="5" min="1"><br><br>
        <button type="submit">開始練習</button>
      </form>
    {% endif %}
  </body>
</html>
"""

@app.route("/", methods=["GET"])
def index():
    index = session.get("index", 0)
    questions = session.get("questions", [])
    if questions and index < len(questions):
        return render_template_string(HTML_TEMPLATE, question=questions[index], index=index, explanation=session.get("explanation"))
    else:
        return render_template_string(HTML_TEMPLATE, question=None, index=0, explanation="")

@app.route("/start", methods=["POST"])
def start():
    mode = request.form["mode"]
    count = int(request.form["count"])
    session["mode"] = mode
    if mode == "全部題庫":
        questions = random.sample(question_pool, min(count, len(question_pool)))
    elif mode == "只練錯題":
        questions = random.sample(wrong_questions, min(count, len(wrong_questions)))
    elif mode == "錯題反覆練習直到正確":
        questions = wrong_questions.copy()
    else:
        questions = []
    session["questions"] = questions
    session["index"] = 0
    session["explanation"] = ""
    return redirect(url_for("index"))

@app.route("/reset")
def reset():
    session.clear()
    return redirect(url_for("index"))

@app.route("/", methods=["POST"])
def submit():
    if "questions" not in session or not session["questions"]:
        return redirect(url_for("index"))

    answer = list(map(int, request.form.getlist("answer")))
    index = session.get("index", 0)
    questions = session.get("questions", [])
    if index >= len(questions):
        return redirect(url_for("index"))

    q = questions[index]
    correct = sorted(answer) == sorted(q["correct_answers"])

    if correct:
        result = "✅ 正確！"
        if q in wrong_questions and session.get("mode") == "錯題反覆練習直到正確":
            wrong_questions.remove(q)
            save_wrong_questions()
    else:
        result = "❌ 錯誤！"
        if q not in wrong_questions:
            wrong_questions.append(q)
            save_wrong_questions()

    session["explanation"] = f"{result}\n說明：{q['explanation']}"
    return redirect(url_for("index"))

@app.route("/next")
def next_question():
    session["index"] = session.get("index", 0) + 1
    if session["index"] >= len(session.get("questions", [])):
        session.clear()
        return render_template_string("<p>✅ 練習完成！<br><a href='/'>重新開始</a></p>")
    return redirect(url_for("index"))

if __name__ == "__main__":
    app.run(debug=True)
