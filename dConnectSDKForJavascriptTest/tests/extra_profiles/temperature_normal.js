module('TemperatureProfileNormalTest', {
  setup: function() {
    init();
  }
});

/**
 * Temperatureプロファイルの正常系テストを行うクラス。
 * @class
 */
var TemperatureProfileNormalTest = {};

/**
 * 温度を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /temperature?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
TemperatureProfileNormalTest.allNormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('temperature');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
          assert.ok(true, 'result=' + json.result);
          assert.ok(true, 'temperature=' + json.temperature);
          assert.ok(true, 'type=' + json.type);
          QUnit.start();
        },
    function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode),
          'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode +
    ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('allNormalTest001',
    TemperatureProfileNormalTest.allNormalTest001);
