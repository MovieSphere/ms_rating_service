// Configuración inicial
beforeAll(() => {
  // Mock de la base de datos
  jest.mock('../../src/db', () => ({
    getRatingFromDB: jest.fn()
  }));
});

describe('Servicio de Ratings', () => {
  const { getProductRating } = require('../../src/index');
  const db = require('../../src/db');

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Debería retornar rating 0 cuando DB no tiene datos', async () => {
    db.getRatingFromDB.mockResolvedValue(null);
    const result = await getProductRating('prod-999');
    expect(result).toEqual({ average: 0, count: 0 });
  });

  test('Debería retornar rating correcto desde DB', async () => {
    const mockData = { average: 4.5, count: 120 };
    db.getRatingFromDB.mockResolvedValue(mockData);
    
    const result = await getProductRating('prod-001');
    expect(result).toEqual(mockData);
  });
});
