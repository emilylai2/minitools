from flask import Flask, render_template, request, redirect, url_for, session
from flask_session import Session
import json
import random
import os
import webbrowser
import threading
import time

app = Flask(__name__)
app.secret_key = 'supersecretkey'  # session 加密金鑰

# ✅ 使用伺服器端 session
app.config['SESSION_TYPE'] = 'filesystem'
app.config['SESSION_FILE_DIR'] = './.flask_session/'
app.config['SESSION_PERMANENT'] = False
os.makedirs(app.config['SESSION_FILE_DIR'], exist_ok=True)
Session(app)

# 題庫檔案路徑
QUESTION_FILE = "kcna_questions_structured.json"

# 載入題庫資料
def load_questions():
    base_path = os.path.dirname(os.path.abspath(__file__))
    json_path = os.path.join(base_path, QUESTION_FILE)
    with open(json_path, "r", encoding="utf-8") as f:
        return json.load(f)

# ✅ 首頁：選擇題數並清空舊 session
@app.route("/", methods=["GET", "POST"])
def index():
    session.clear()  # ✅ 每次進首頁都清除 session
    if request.method == "POST":
        num_questions = int(request.form["num_questions"])
        all_questions = load_questions()
        total_questions = len(all_questions)
        selected_indexes = random.sample(range(total_questions), num_questions)
        session['question_indexes'] = selected_indexes
        session['answers'] = []
        session['current'] = 0
        return redirect(url_for('quiz'))
    return render_template("index.html")

# 顯示題目
@app.route("/quiz", methods=["GET", "POST"])
def quiz():
    all_questions = load_questions()
    question_indexes = session.get('question_indexes', [])
    current = session.get('current', 0)
    answers = session.get('answers', [])

    if request.method == "POST":
        selected = request.form.get("answer")
        answers.append(selected)
        session['answers'] = answers
        session['current'] = current + 1
        if current + 1 >= len(question_indexes):
            return redirect(url_for("result"))
        return redirect(url_for("quiz"))

    if current < len(question_indexes):
        q_index = question_indexes[current]
        q = all_questions[q_index]
        return render_template("quiz.html", q=q, qid=current + 1, total=len(question_indexes))
    return redirect(url_for("result"))

# 顯示結果
@app.route("/result")
def result():
    all_questions = load_questions()
    question_indexes = session.get('question_indexes', [])
    answers = session.get('answers', [])
    score = 0
    result_details = []

    for i, q_index in enumerate(question_indexes):
        q = all_questions[q_index]
        correct = q.get("answer", "")
        user_ans = answers[i] if i < len(answers) else ""
        is_correct = (user_ans == correct)
        if is_correct:
            score += 1
        correct_option = next((opt for opt in q["options"] if opt.startswith(correct + ".")), "")
        result_details.append({
            "question": q["question"],
            "options": q["options"],
            "correct": correct,
            "correct_option": correct_option,
            "your": user_ans,
            "is_correct": is_correct
        })

    return render_template("result.html", score=score, total=len(question_indexes), details=result_details)

# ✅ 自動開啟瀏覽器，並加上隨機參數避免 cache
def open_browser():
    time.sleep(1)
    url = f"http://127.0.0.1:5000/?v={random.randint(1000,9999)}"
    webbrowser.open(url)

if __name__ == '__main__':
    threading.Thread(target=open_browser).start()
    app.run(debug=False)
