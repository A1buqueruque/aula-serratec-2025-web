import {CardContacts} from "../CardContacts/CardContacts"

export function ListContacts({ contatos, onRemoveContato }) {
  if (contatos.length === 0) {
    return <p>Nenhum contato adicionado ainda.</p>;
  }

  return (
    <>
      {contatos.map((contato, index) => (
        <CardContacts
          key={index}
          contato={contato}
          onRemove={() => onRemoveContato(index)}
        />
      ))}
    </>
  );
}
