function cep(event: React.FormEvent<HTMLInputElement>) {
  event.currentTarget.maxLength = 9;
  let value = event.currentTarget.value;
  value = value.replace(/\D/g, '');
  value = value.replace(/^(\d{5})(\d)/, '$1-$2');
  event.currentTarget.value = value;
  return event;
}

function cpf(event: React.FormEvent<HTMLInputElement>) {
  event.currentTarget.maxLength = 14;
  let value = event.currentTarget.value;
  value = value.replace(/\D/g, '');
  value = value.replace(/^(\d{3})(\d{3})(\d{3})(\d)/, '$1.$2.$3-$4');
  event.currentTarget.value = value;
  return event;
}

function date(event: React.FormEvent<HTMLInputElement>) {
  event.currentTarget.maxLength = 10;
  let value = event.currentTarget.value;
  value = value.replace(/\D/g, '');
  value = value.replace(/^(\d{2})(\d{2})(\d)/, '$1/$2/$3');
  event.currentTarget.value = value;
  return event;
}

function cellphone(event: React.FormEvent<HTMLInputElement>) {
  event.currentTarget.maxLength = 14;
  let value = event.currentTarget.value;
  value = value.replace(/\D/g, '');
  value = value.replace(/^(\d{2})(\d{5})(\d)/, '($1)$2-$3');
  event.currentTarget.value = value;
  return event;
}

export const factoryMasks = (event: React.ChangeEvent<HTMLInputElement>) => ({
  masks: {
    cpf: () => cpf(event),
    cep: () => cep(event),
    date: () => date(event),
    cellphone: () => cellphone(event),
  },
});
