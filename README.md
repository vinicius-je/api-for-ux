# api-for-ux

<details>
  <summary>Retorna os projetos</summary>

```
  GET https://api-m3jb.onrender.com/projetos/1)https://api-m3jb.onrender.com/projetos
```

```
  {
   "id":1,
   "nome":"Projeto",
   "dataInicio":"02/01/2024",
   "dataFim":"02/02/2024",
   "coordernador":"",
   "cliente":"Coordenador",
   "sponsor":"-",
   "orçamento":"0",
   "entregas":"",
   "marcos":[
      {
         "id":1,
         "marco":"MVC",
         "dataInicio":"02/01/2024",
         "dataEntrega":"-",
         "horasPlanejadas":"60 horas",
         "horasTrabalhadas":"-"
      }
   ],
   "membros":[
      {
         "idPessoa":"1",
         "cargo":"Desenvolvedor",
         "vinculo":"Bolsista",
         "cargaHoraria":"4 horas",
         "status":"ATIVO",
         "dataInicio":"02/01/2024",
         "dataFim":"-",
         "id":1,
         "nome":"aluno",
         "cpf":"000.000.000-00",
         "telefone":"99 900000000",
         "email":"aluno@email.com",
         "dataNascimento":"00/00/0000"
      }
   ]
}
```

</details>

<details>
  <summary>Cadastrar um projeto</summary>
  
```
  POST https://api-m3jb.onrender.com/projetos
```

```
{
		"nome": "Projetinho",
		"dataInicio": "02/01/2024",
		"dataFim": "02/02/2024",
		"coordernador": "Coordenador",
		"cliente": "-",
		"sponsor": "-",
		"orçamento": "0",
		"entregas": "",
		"marcos": [
			{
				"id": 1,
				"marco": "MVC",
				"dataInicio": "02/10/2024",
				"dataEntrega": "-",
				"horasPlanejadas": "60 horas",
				"horasTrabalhadas": "-"
			}
		],
		"membros": [
			{
				"idPessoa": 1,
				"cargo": "Desenvolvedor",
				"vinculo": "Bolsista",
				"cargaHoraria": "4 horas",
				"status": "ATIVO",
				"dataInicio": "02/01/2024",
				"dataFim": "-"
			}
		]
	}
```
</details>

<details>
  <summary>Retorna as pessoas</summary>

```
  GET https://api-m3jb.onrender.com/projetos/1)https://api-m3jb.onrender.com/pessoas
```

```
  [
   {
      "id":1,
      "nome":"aluno",
      "cpf":"000.000.000-00",
      "telefone":"99 900000000",
      "email":"aluno@email.com",
      "dataNascimento":"00/00/0000"
   }
]
```
</details>

<details>
  <summary>Cadastrar uma pessoass</summary>

```
  POST https://api-m3jb.onrender.com/pessoas
```

```
{
	"nome": "aluno 2",
	"cpf": "000.000.000-00",
	"telefone": "8 900000000",
	"email": "aluno2@email.com",
	"dataNascimento": "00/00/0000"
}
```
</details>

