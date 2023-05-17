import sqlite3 as conector

conexao = conector.connect("myDatabase.db")

conexao = conexao.cursor()

comando1 = " CREATE TABLE tblUser (codUser INTERGER NOT NULL, name TEXT NOT NULL, phone INTERGER, address TEXT NOT NULL, email TEXT NOT NULL, age INTERGER NOT NULL, PRIMARY KEY(codUser));"
conector.Cursor.execute(comando1)
conexao.commit()

comando2 = " CREATE TABLE tblProfession (codProfession INTERGER NOT NULL,  name TEXT NOT NULL, phone INTERGER, address TEXT NOT NULL, email TEXT NOT NULL, age INTERGER NOT NULL, profession TEXT NOT NULL, experience TEXT NOT NULL, PRIMARY KEY(codProfession));"
conector.Cursor.execute(comando2)
conexao.commit()

comando3 = "CREATE TABLE Category (codCategory INTERGER NOT NULL, nameCategory TEXT NOT NULL id: '1' = 'Pedreiro' , id: '2'= 'Gesseiro' , id: '3'= 'Ladrilheiro' , id: '4'= 'Pintor' , id: '5'= 'Armador', PRIMARY KEY(codCategory)); "

conector.Cursor.execute(comando3)
conexao.commit()

comando4 = "CREATE TABLE Services (codService INTERGER NOT NULL, PRIMARY KEY(codService), FOREIGN KEY (codCategory));"
conector.Cursor.execute(comando4)
conexao.commit()
