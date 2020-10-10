function MemberFactory() {
  this.createMember = (name, type) => {
    let member;

    if(type === 'simple') {
      member = new SimpleMember(name);
    } else if(type === 'advanced') {
      member = new AdvancedMember(name);
    }

    member.type = type;

    member.getInfo = function() {
      console.log(`${this.name} (${this.type}), ${this.cost}`)
    }

    return member;
  }
}

// now we need constructor as well for the types

const SimpleMember = function(name) {
  this.name = name;
  this.cost = '$5';
}

const AdvancedMember = function(name) {
  this.name = name;
  this.cost = '$10';
}

const members = [];
const factory = new MemberFactory();

members.push(factory.createMember('Gabriel', 'advanced'));
members.push(factory.createMember('Stella', 'simple'));
// console.log(members);

members.forEach((member) => {
  member.getInfo();
})