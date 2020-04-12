CREATE TABLE IF NOT EXISTS devmt.todo (
  id SMALLINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  lembrete VARCHAR(64) NOT NULL,
  concluido BOOLEAN DEFAULT FALSE
);

INSERT INTO devmt.todo (lembrete) VALUES ("Carregar o seed pro banco"), ("Conectar com o nodejs");