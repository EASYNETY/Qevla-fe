export class TransferType {
  static asArray: TransferType[] = [];
  id: string;
  name: string;
  label_value: string;

  constructor(id: string, name: string, label_value: string) {
    this.id = id;
    this.name = name;
    this.label_value = label_value;
    TransferType.asArray.push(this);
  }

  static OWN_ACCOUNT_TRANSFER = new TransferType(
    "OWN_ACCOUNT_TRANSFER",
    "Own account tranfer",
    "Own account transfer"
  );
  static INTERBANK_TRANFER = new TransferType(
    "INTERBANK_TRANFER",
    "TRANSFER TO OTHER BANKS",
    "TRANSFER TO OTHER BANKS"
  );
  static TRANSFERS_WITHIN = new TransferType(
    "TRANSFERS_WITHIN",
    "Transfer to PARALLEX Account",
    "Transfer to PARALLEX Account"
  );
  static BULK_UPLOAD = new TransferType(
    "BULK_UPLOAD",
    "Bulk upload",
    "Bulk upload"
  );

  getFieldName(id: string) {
    let val = TransferType.asArray.filter((x) => x.id === id);
    if (val.length > 0) {
      return val[0].name;
    }
    return "";
  }
  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }
  getLabelValue() {
    return this.label_value;
  }

  toString() {
    return this.valueOf();
  }

  get order() {
    return TransferType.asArray.indexOf(this);
  }
}
