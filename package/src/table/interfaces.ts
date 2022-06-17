interface NhsTableHeader {
  text: string;
  value: string;
  style?: {
    [key: string]: string;
  };
}

interface NhsTableItem {
  [key: string]: any;
}

export { NhsTableHeader, NhsTableItem };
