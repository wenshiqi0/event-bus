export class Disposable implements IDisposable {
  dispose() {
    // nothing
  }
}

export interface IDisposable {
  dispose(): void;
}

export class DisposableCollection implements IDisposable {
  private _list: Disposable[] = [];

  addDispose(disposable: IDisposable) {
    this._list.push(disposable);
  }

  clear() {
    this._list = [];
  }

  dispose() {
    this._list.forEach((disposable) => {
      disposable.dispose();
    });
    this.clear();
  }
}
