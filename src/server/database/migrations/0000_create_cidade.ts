import type { Knex } from 'knex';
import { ETableNames } from '../ETableNames';

export async function up(knex: Knex) {

  return knex.schema.createTableIfNotExists(ETableNames.cidade, table => {
    table.bigIncrements('id').primary().index();
    table.string('nome', 100).index().notNullable();
    table.string('estado', 100).index().notNullable();


    table.comment('Tabela para armazenar as cidades do sistema');

  }).then(() => {
    console.log(`Tabela ${ETableNames.cidade} criada com sucesso!`);
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTableIfExists(ETableNames.cidade).then(() => {
    console.log(`Tabela ${ETableNames.cidade} removida com sucesso!`);
  });
}