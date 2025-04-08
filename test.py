import json
import random
import os
from pathlib import Path
import tkinter as tk
from tkinter import messagebox

WRONG_FILE = "kcsa_wrong_questions.json"

with open("question.js", "r", encoding="utf-8") as f:
    all_questions = json.load(f)

if Path(WRONG_FILE).exists():
    with open(WRONG_FILE, "r", encoding="utf-8") as f:
        questions = json.load(f)
else:
    questions = all_questions.copy()

random.shuffle(questions)
wrong_questions = []
current_index = 0

class QuizApp:
    def __init__(self, root):
        self.root = root
        self.root.title("KCSA 練習 App")

        self.question_label = tk.Label(root, text="問題", wraplength=600, justify="left", font=("Arial", 14))
        self.question_label.pack(pady=10)

        self.var_list = []
        self.checkbuttons = []
        for i in range(5):
            var = tk.IntVar()
            cb = tk.Checkbutton(root, text="", variable=var, anchor="w", justify="left", wraplength=600)
            cb.pack(fill="x", padx=20)
            self.var_list.append(var)
            self.checkbuttons.append(cb)

        self.submit_btn = tk.Button(root, text="提交答案", command=self.check_answer)
        self.submit_btn.pack(pady=10)

        self.load_question()

    def load_question(self):
        global current_index
        if current_index >= len(questions):
            self.end_quiz()
            return

        q = questions[current_index]
        self.question_label.config(text=f"Q{current_index + 1}: {q['question']}")
        for i, opt in enumerate(q["options"]):
            self.checkbuttons[i].config(text=f"{i + 1}. {opt}", state="normal")
            self.var_list[i].set(0)
        for j in range(len(q["options"]), 5):
            self.checkbuttons[j].config(text="", state="disabled")

    def check_answer(self):
        global current_index
        q = questions[current_index]
        selected = sorted([i for i, v in enumerate(self.var_list) if v.get() == 1])
        correct = sorted(q["correct_answers"])

        if selected == correct:
            messagebox.showinfo("正確", "✅ 回答正確！")
        else:
            correct_str = ", ".join([str(c + 1) for c in correct])
            explanation = q.get("explanation", "")
            messagebox.showerror("錯誤", f"❌ 回答錯誤！\n正確答案是: {correct_str}\n\n解說: {explanation}")
            wrong_questions.append(q)

        current_index += 1
        self.load_question()

    def end_quiz(self):
        if wrong_questions:
            with open(WRONG_FILE, "w", encoding="utf-8") as f:
                json.dump(wrong_questions, f, ensure_ascii=False, indent=2)
            messagebox.showinfo("完成", f"測驗完成，錯題已儲存 ({len(wrong_questions)} 題)\n下次將優先練習這些題目。")
        else:
            if Path(WRONG_FILE).exists():
                Path(WRONG_FILE).unlink()
            messagebox.showinfo("全部正確！", "🎉 恭喜你全部答對，錯題清單已清除！")
        self.root.destroy()

if __name__ == "__main__":
    root = tk.Tk()
    app = QuizApp(root)
    root.mainloop()
