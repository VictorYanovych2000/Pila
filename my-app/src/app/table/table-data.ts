export interface TableDataItem {
  productCode: string;
  name: string;
  unit: string;
  price: number;
  availability: string;
  action: string;
}

export const TABLE_DATA:TableDataItem[] = [
  {
    productCode: 'APP123',
    name: 'AppLes',
    unit: 'kg',
    price: 1,
    availability: 'In stock',
    action: 'Gif'
  },
  {
    productCode: 'APP123',
    name: 'AppLes',
    unit: 'kg',
    price: 1,
    availability: 'In stock',
    action: 'Gif'
  },
  {
    productCode: 'APP123',
    name: 'AppLes',
    unit: 'kg',
    price: 1,
    availability: 'In stock',
    action: 'Gif'
  },
  {
    productCode: 'APP123',
    name: 'AppLes',
    unit: 'kg',
    price: 1,
    availability: 'In stock',
    action: 'Gif'
  }

]
export type TableDataKeys = keyof TableDataItem
export type TableDataKeysArray = Array<TableDataKeys>
