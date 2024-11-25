from flask_app import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return "Flask가 제대로 설치되었습니다!"

if __name__ == "__main__":
    app.run(debug=True)

