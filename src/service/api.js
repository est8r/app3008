import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3300',
});

export async function getProdutos() {
  const response = await api.get('/produtos');
  return response.data.produtos;
}

export async function deleteProduto(id) {
  await api.delete(`/produtos/deletar/${id}`);
}
