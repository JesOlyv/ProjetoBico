import sqlite3

conexao = sqlite3.connect("myDatabase.db")
cursor = conexao.cursor()

comando1 = "CREATE TABLE tblUser (codUser INTEGER NOT NULL, name TEXT NOT NULL, phone INTEGER, address TEXT NOT NULL, email TEXT NOT NULL, age INTEGER NOT NULL, PRIMARY KEY(codUser));"
cursor.execute(comando1)
conexao.commit()

comando2 = "CREATE TABLE tblProfession (codProfession INTEGER NOT NULL, name TEXT NOT NULL, phone INTEGER, address TEXT NOT NULL, email TEXT NOT NULL, age INTEGER NOT NULL, profession TEXT NOT NULL, experience TEXT NOT NULL, PRIMARY KEY(codProfession));"
cursor.execute(comando2)
conexao.commit()

comando3 = "CREATE TABLE Category (codCategory INTEGER NOT NULL, nameCategory TEXT NOT NULL, PRIMARY KEY(codCategory));"
cursor.execute(comando3)
conexao.commit()

comando4 = "CREATE TABLE Services (codService INTEGER NOT NULL, codCategory INTEGER NOT NULL, PRIMARY KEY(codService), FOREIGN KEY (codCategory) REFERENCES Category(codCategory));"
cursor.execute(comando4)
conexao.commit()

conexao.close()
