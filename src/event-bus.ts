import { EventEmitter } from './emitter';
import { Disposable } from './dispose';

export namespace events {
  export type EventId = string | Symbol;

  const eventMap = new Map<EventId, EventEmitter<any>>();

  export function emitEvent<T>(id: EventId, params?: T) {
    const emitter = eventMap.get(id) || new EventEmitter<T | undefined>();
    emitter.emit(params);
  }

  export function addEventListener<T>(id: EventId, callback: (p: T) => void): Disposable {
    const emitter = eventMap.get(id) || new EventEmitter<T | undefined>();
    const disposable = emitter.event(callback);
    eventMap.set(id, emitter);
    return {
      dispose: () => {
        disposable.dispose();
      }
    }
  }

  export function removeEventListener(id: EventId) {
    const emitter = eventMap.get(id);
    if (emitter) {
      emitter.dispose();
      eventMap.delete(id);
    }
  }
}
