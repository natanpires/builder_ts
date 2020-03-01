namespace BuilderDP {

  // Builder
  export class Builder {
    private _name: string     = "";
    private _state: string    = "";
    private _password: string = "";

    setName(value: string) {
      this._name = value;
      return this;
    }

    get Name(): string {
      return this._name;
    }
    
    get State(): string {
      return this._state;
    }

    setState(value: string) {
      this._state = value;
      return this;
    }
    
    get Password(): string {
      return this._password;
    }

    setPassword(value: string) {
      this._password = value;
      return this;
    }

    build(): Account {
      return new Account(this);
    }

  }

  // Build

  export class Account {

    private _name: string      = "";
    private _state: string     = "";
    private _password: string  = "";

    constructor(data: Builder) {
      this._name      = data.Name;
      this._state     = data.State;
      this._password  = data.Password;
    }

    get Name() {
      return this._name;
    }
    
    get State() {
      return this._state;
    }

    get Password() {
      return this._password;
    }

  }
}

