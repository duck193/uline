angular.module('ngmp.models.sampleModel', []).factory('SampleModel', function () {

  /**
   * Constructor, with class name
   */
  function SampleModel(sampleProp) {
    // Public properties, assigned to the instance ('this')
    this.sampleProp = sampleProp;
  }

  /**
   * Public method, assigned to prototype
   */
  SampleModel.prototype.getSampleProp = function () {
    return this.sampleProp;
  };

  /**
   * Static method, assigned to class
   * Instance ('this') is not available in static context
   */
  SampleModel.build = function (data) {
    return new SampleModel(
      data.sampleProp
    );
  };

  /**
   * Return the constructor function
   */
  return SampleModel;
});