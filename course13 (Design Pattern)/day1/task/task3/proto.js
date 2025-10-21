export function DocumentPrototype(proto) {
  this.proto = proto;

  this.clone = function () {
    // Create a new object based on the prototype
    let documentClone = Object.create(this.proto);
    return documentClone;
  };
}
