module.exports = {
  novoLembrete: 'INSERT INTO devmt.todo (lembrete) VALUES (?);',
  faltaFazer: 'SELECT * FROM devmt.todo WHERE concluido=0;',
  concluir: 'UPDATE devmt.todo SET concluido=1 WHERE id=?;',
  esquecer: 'DELETE FROM devmt.todo WHERE id=? AND concluido=1;',
}