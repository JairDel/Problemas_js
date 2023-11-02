const ventas = [
    { representante: 'Representante 1', mes: 'Enero', producto: 'Producto A', venta: 100 },
    { representante: 'Representante 1', mes: 'Abril', producto: 'Producto B', venta: 200 },
    { representante: 'Representante 1', mes: 'Junio', producto: 'Producto C', venta: 150 },
    { representante: 'Representante 1', mes: 'Octubre', producto: 'Producto D', venta: 300 },
  ];
  const totalVentas = {};
  
  ventas.forEach((ventaItem) => {
    const { mes, producto, venta } = ventaItem;
    if (!totalVentas[mes]) {
      totalVentas[mes] = {};
    }
    if (!totalVentas[mes][producto]) {
      totalVentas[mes][producto] = 0;
    }
    totalVentas[mes][producto] += venta;
  });

  console.log('Mes\tProducto\tTotal de Ventas');
  for (const mes in totalVentas) {
    for (const producto in totalVentas[mes]) {
      console.log(`${mes}\t${producto}\t${totalVentas[mes][producto]}`);
    }
  }