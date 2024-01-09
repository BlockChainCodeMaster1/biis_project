const SOGAP = (sequelize, DataTypes) => {
  var table = sequelize.define('sogap', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    address: DataTypes.STRING,
    tx: DataTypes.STRING,
    is_public: DataTypes.STRING
  })
  table.sync();
  return table;
}

export default SOGAP;