from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/")
def home():
    return FileResponse("static/index.html")

@app.get("/IMC")
def Calcola(peso: float, altezza: float):
    imc = peso / (altezza ** 2)
    return {"imc": round(imc, 2)}
