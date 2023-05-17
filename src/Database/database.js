const db = SQLite.openDatabase(
    {
      name: 'myDatabase.db',
      location: 'default',
    },
    () => {},
    error => {
      console.log(error);
    }
  );
  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, email TEXT, phone INTERGER, address TEXT NOT NULL, email TEXT NOT NULL, age INTERGER NOT NUL, senha INTEGER NOT NULL);',
      'CREATE TABLE IF NOT EXISTS  Profession(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, phone INTERGER, address TEXT NOT NULL, email TEXT NOT NULL, age INTERGER NOT NULL, profession TEXT NOT NULL, experience TEXT NOT NULL);',
      'CREATE TABLE IF NOT EXISTS Category (codCategory INTEGER NOT NULL,nameCategory TEXT NOT NULL,PRIMARY KEY(codCategory);', 
      'CREATE TABLE IF NOT EXISTS Services (codService INTEGER NOT NULL, codCategory INTEGER NOT NULL,PRIMARY KEY (codService),FOREIGN KEY (codCategory) REFERENCES Category(codCategory);',
      [],
      (_, result) => {
        console.log(result);
      },
      error => {
        console.log(error);
      }
    );  
  });

