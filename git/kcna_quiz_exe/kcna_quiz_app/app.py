from flask import Flask, render_template, request, redirect, url_for, session
import json
import random
import os

app = Flask(__name__)
app.secret_key = 'supersecretkey'  # 用於 session 儲存

# 題庫檔案路徑
QUESTION_FILE = "kcna_questions_structured.json"

# 載入題庫
def load_questions():
    base_path = os.path.dirname(os.path.abspath(__file__))
    json_path = os.path.join(base_path, "kcna_questions_structured.json")
    with open(json_path, "r", encoding="utf-8") as f:
        return json.load(f)

# 首頁：選擇幾題作答
@app.route("/", methods=["GET", "POST"])
def index():
    # ✅ 新增這行：清除過去的 session 測驗資料
    session.clear()
    if request.method == "POST":
        num_questions = int(request.form["num_questions"])
        all_questions = load_questions()
        selected = random.sample(all_questions, num_questions)
        session['questions'] = selected
        session['answers'] = []
        session['current'] = 0
        return redirect(url_for('quiz'))
    return render_template("index.html")

# 顯示題目
@app.route("/quiz", methods=["GET", "POST"])
def quiz():
    questions = session.get('questions', [])
    current = session.get('current', 0)
    answers = session.get('answers', [])

    if request.method == "POST":
        selected = request.form.get("answer")
        answers.append(selected)
        session['answers'] = answers
        session['current'] = current + 1
        if current + 1 >= len(questions):
            return redirect(url_for("result"))
        return redirect(url_for("quiz"))

    if current < len(questions):
        return render_template("quiz.html", q=questions[current], qid=current + 1, total=len(questions))
    return redirect(url_for("result"))

# 顯示結果
@app.route("/result")
def result():
    questions = session.get('questions', [])
    answers = session.get('answers', [])
    score = 0
    result_details = []

    for i, q in enumerate(questions):
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

    return render_template("result.html", score=score, total=len(questions), details=result_details)

if __name__ == '__main__':
    app.run(debug=True)
