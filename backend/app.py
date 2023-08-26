from flask import Flask, request, jsonify
from flask_cors import CORS
import datetime

app = Flask(__name__)
CORS(app)

def converter_data_para_dia_semana(data):
    dias_da_semana = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"]
    dia = data.weekday()
    return dias_da_semana[dia]

def Meu_Canino_Feliz_Preco(dia_da_semana, qtd_pequenos, qtd_grandes):
    if dia_da_semana == 'Sábado' or dia_da_semana == 'Domingo':
        preco_pequeno = 24
        preco_grande = 48
        return preco_pequeno * qtd_pequenos + preco_grande * qtd_grandes
    else:
        preco_pequeno = 20
        preco_grande = 40
        return preco_pequeno * qtd_pequenos + preco_grande * qtd_grandes

def Vai_Rex_Preco(dia_da_semana, qtd_pequenos, qtd_grandes):
    if dia_da_semana == 'Sábado' or dia_da_semana == 'Domingo':
        preco_pequeno = 20
        preco_grande = 55
        return preco_pequeno * qtd_pequenos + preco_grande * qtd_grandes
    else:
        preco_pequeno = 15
        preco_grande = 50
        return preco_pequeno * qtd_pequenos + preco_grande * qtd_grandes

def ChowChawgas_Preco(dia_da_semana, qtd_pequenos, qtd_grandes):
    preco_pequeno = 30
    preco_grande = 45
    return preco_pequeno * qtd_pequenos + preco_grande * qtd_grandes

def Calcula_Menor_Preco(Meu_Canino_Feliz, Vai_Rex, ChowChawgas):
    distancias = {
        'Meu_Canino_Feliz': 2000,
        'Vai_Rex': 1700,
        'ChowChawgas': 800
    }
    opcoes = {
        'Meu Canino Feliz': Meu_Canino_Feliz,
        'Vai Rex': Vai_Rex,
        'ChowChawgas': ChowChawgas
    }

    menor_preco = min(opcoes.values())
    opcoes_com_menor_preco = [opcao for opcao, preco in opcoes.items() if preco == menor_preco]

    if len(opcoes_com_menor_preco) > 1:
        menor_distancia = min([distancias[opcao] for opcao in opcoes_com_menor_preco])
        opcao_menor_distancia = [opcao for opcao in opcoes_com_menor_preco if distancias[opcao] == menor_distancia]
        return opcao_menor_distancia[1], menor_preco
    else:
        return opcoes_com_menor_preco[0], menor_preco

@app.route('/api', methods=["POST"])
def calcula():
    if request.is_json:
        data = request.get_json()
        if "ddmmyyyy" in data and "qtd_pequenos" in data and "qtd_grandes" in data:
            ddmmyyyy, qtd_pequenos, qtd_grandes = data["ddmmyyyy"], int(data["qtd_pequenos"]), int(data["qtd_grandes"])

            # tratamento para retornar uma mensagem de erro caso o valor de qtd_pequenos ou qtd_grandes seja negativo e que seja mostrado que houve um erro
            if qtd_pequenos < 0 or qtd_grandes < 0:
                return jsonify({"error": "Quantidade de cachorros negativa"}), 400


            dia_da_semana = converter_data_para_dia_semana(datetime.date.fromisoformat(ddmmyyyy))
            meu_canino_feliz = Meu_Canino_Feliz_Preco(dia_da_semana, qtd_pequenos, qtd_grandes)
            vai_rex = Vai_Rex_Preco(dia_da_semana, qtd_pequenos, qtd_grandes)
            chow_chawgas = ChowChawgas_Preco(dia_da_semana, qtd_pequenos, qtd_grandes)
            opcao_menor_preco, menor_preco = Calcula_Menor_Preco(meu_canino_feliz, vai_rex, chow_chawgas)
        
            response = {
                'opcao_menor_preco': opcao_menor_preco,
                'menor_preco': menor_preco
            }
            return jsonify(response), 200

        else:
            return jsonify({"error": "Dados incompletos"}), 400  # Bad Request
    else:
        return jsonify({"error": "Requisição não é JSON"}), 400  # Bad Request

if __name__ == "__main__":
    app.run()
