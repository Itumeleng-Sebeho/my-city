// assert.equal(isFromBellville('CY 123'), true);
// assert.equal(isFromBellville('CJ 123'), false);
module.exports = function isFromBellville(regNum, Loc){
    return (regNum.startsWith('CY'));
  };
  