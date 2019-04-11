import electron from 'electron';

export default class RemoteService {
  constructor() {
    this._remote = electron.remote;
  }

  close() {
    this._remote.getCurrentWindow().close();
  }
}