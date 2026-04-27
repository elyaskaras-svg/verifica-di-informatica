from fastapi import FastAPI, Form
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
import pandas as pd

app = FastAPI()

df = pd.read_excel("/workspaces/Verifica_FASTAPI/dati.xlsx")

app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/") 
def home():

    return FileResponse('static/index.html')

@app.get("/IMC") 
def Calcola_Imc(peso: float, altezza: float):
    if altezza == 0 or peso == 0 or altezza >= 2.91 or peso >= 501:
        return {"imc": 11}
    risultato = peso / altezza**2
    df.loc[len(df)] = [peso, altezza, risultato]
    df.to_excel("/workspaces/Verifica_FASTAPI/dati.xlsx", index=False)
    if risultato < 18.5:
        return {"imc": risultato, "Valutazione": -1}
    elif risultato > 24.9:
        return {"imc": risultato, "Valutazione": 1}
    else:
        return {"imc": risultato, "Valutazione": 0}


@app.post("/IMC2") 
def Calcola(peso: float = Form(...), altezza: float = Form(...)):
    if altezza == 0 or peso == 0 or altezza >= 2.91 or peso >= 501:
        return {"imc": 11}
    risultato = peso / altezza**2
    if risultato < 18.5:
        return {"imc": risultato, "Valutazione": -1}
    elif risultato > 24.9:
        return {"imc": risultato, "Valutazione": 1}
    else:
        return {"imc": risultato, "Valutazione": 0}
