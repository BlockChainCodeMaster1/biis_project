const IDO = (sequelize, DataTypes) => {
  var table = sequelize.define('ido', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    address: DataTypes.STRING,
    tx: DataTypes.STRING,
    whitelist_amount: DataTypes.STRING,
    ga: DataTypes.STRING,
    date: DataTypes.STRING,
    state: DataTypes.INTEGER,
  })
  table.sync();
  return table;
}

export default IDO;