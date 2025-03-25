from flask import Flask, render_template, request, redirect, url_for
import json

app = Flask(__name__)

# 載入題庫
with open("kcna_questions_structured.json", "r", encoding="utf-8") as f:
    questions = json.load(f)

@app.route("/")
def index():
    for i, q in enumerate(questions):
        if not q.get("answer"):
            return redirect(url_for("question", qid=i))
    return render_template("done.html")

@app.route("/question/<int:qid>")
def question(qid):
    if qid >= len(questions):
        return redirect(url_for("index"))
    return render_template("question.html", q=questions[qid], qid=qid, total=len(questions))

@app.route("/submit/<int:qid>", methods=["POST"])
def submit(qid):
    answer = request.form.get("answer")
    if answer in ["A", "B", "C", "D"]:
        questions[qid]["answer"] = answer
        with open("kcna_questions_with_answers.json", "w", encoding="utf-8") as f:
            json.dump(questions, f, ensure_ascii=False, indent=2)
    return redirect(url_for("index"))

if __name__ == "__main__":
    app.run(debug=True)
