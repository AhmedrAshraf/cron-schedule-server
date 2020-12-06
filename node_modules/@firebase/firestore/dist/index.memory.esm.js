import { __extends as t, __awaiter as e, __generator as n, __spreadArrays as r } from "tslib";

import i from "@firebase/app";

import { Logger as o, LogLevel as u } from "@firebase/logger";

import { isMobileCordova as s, isReactNative as a, isElectron as c, isIE as h, isUWP as f, isBrowserExtension as l } from "@firebase/util";

import { XhrIo as p, EventType as d, ErrorCode as v, createWebChannelTransport as y, getStatEventTarget as g, WebChannel as m, Event as w, Stat as b } from "@firebase/webchannel-wrapper";

import { Component as E } from "@firebase/component";

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var T = 
/**
     * Constructs a DatabaseInfo using the provided host, databaseId and
     * persistenceKey.
     *
     * @param databaseId - The database to use.
     * @param persistenceKey - A unique identifier for this Firestore's local
     * storage (used in conjunction with the databaseId).
     * @param host - The Firestore backend host to connect to.
     * @param ssl - Whether to use SSL when connecting.
     * @param forceLongPolling - Whether to use the forceLongPolling option
     * when using WebChannel as the network transport.
     * @param autoDetectLongPolling - Whether to use the detectBufferingProxy
     * option when using WebChannel as the network transport.
     */
function(t, e, n, r, i, o) {
    this.t = t, this.persistenceKey = e, this.host = n, this.ssl = r, this.forceLongPolling = i, 
    this.i = o;
}, N = /** @class */ function() {
    function t(t, e) {
        this.projectId = t, this.database = e || "(default)";
    }
    return Object.defineProperty(t.prototype, "o", {
        get: function() {
            return "(default)" === this.database;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.isEqual = function(e) {
        return e instanceof t && e.projectId === this.projectId && e.database === this.database;
    }, t;
}(), I = /** @class */ function() {
    function t(t) {
        this.uid = t;
    }
    return t.prototype.u = function() {
        return null != this.uid;
    }, 
    /**
     * Returns a key representing this user, suitable for inclusion in a
     * dictionary.
     */
    t.prototype.h = function() {
        return this.u() ? "uid:" + this.uid : "anonymous-user";
    }, t.prototype.isEqual = function(t) {
        return t.uid === this.uid;
    }, t;
}();

/** The default database name for a project. */
/** Represents the database ID a Firestore client is associated with. */
/** A user with a null UID. */ I.UNAUTHENTICATED = new I(null), 
// TODO(mikelehen): Look into getting a proper uid-equivalent for
// non-FirebaseAuth providers.
I.l = new I("google-credentials-uid"), I._ = new I("first-party-uid");

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var A = new o("@firebase/firestore");

// Helper methods are needed because variables can't be exported as read/write
function C() {
    return A.logLevel;
}

/**
 * Sets the verbosity of Cloud Firestore logs (debug, error, or silent).
 *
 * @param logLevel - The verbosity you set for activity and error logging. Can
 *   be any of the following values:
 *
 *   <ul>
 *     <li>`debug` for the most verbose logging level, primarily for
 *     debugging.</li>
 *     <li>`error` to log errors only.</li>
 *     <li><code>`silent` to turn off logging.</li>
 *   </ul>
 */ function D(t) {
    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
    if (A.logLevel <= u.DEBUG) {
        var i = e.map(_);
        A.debug.apply(A, r([ "Firestore (8.1.2): " + t ], i));
    }
}

function k(t) {
    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
    if (A.logLevel <= u.ERROR) {
        var i = e.map(_);
        A.error.apply(A, r([ "Firestore (8.1.2): " + t ], i));
    }
}

function V(t) {
    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
    if (A.logLevel <= u.WARN) {
        var i = e.map(_);
        A.warn.apply(A, r([ "Firestore (8.1.2): " + t ], i));
    }
}

/**
 * Converts an additional log parameter to a string representation.
 */ function _(t) {
    if ("string" == typeof t) return t;
    try {
        return e = t, JSON.stringify(e);
    } catch (e) {
        // Converting to JSON failed, just log the object directly
        return t;
    }
    /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
    /** Formats an object as a JSON string, suitable for logging. */    var e;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Unconditionally fails, throwing an Error with the given message.
 * Messages are stripped in production builds.
 *
 * Returns `never` and can be used in expressions:
 * @example
 * let futureVar = fail('not implemented yet');
 */ function O(t) {
    void 0 === t && (t = "Unexpected state");
    // Log the failure in addition to throw an exception, just in case the
    // exception is swallowed.
        var e = "FIRESTORE (8.1.2) INTERNAL ASSERTION FAILED: " + t;
    // NOTE: We don't use FirestoreError here because these are internal failures
    // that cannot be handled by the user. (Also it would create a circular
    // dependency between the error and assert modules which doesn't work.)
        throw k(e), new Error(e)
    /**
 * Fails if the given assertion condition is false, throwing an Error with the
 * given message if it did.
 *
 * Messages are stripped in production builds.
 */;
}

function P(t, e) {
    t || O();
}

/**
 * Casts `obj` to `T`. In non-production builds, verifies that `obj` is an
 * instance of `T` before casting.
 */ function L(t, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
e) {
    return t;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var R = {
    // Causes are copied from:
    // https://github.com/grpc/grpc/blob/bceec94ea4fc5f0085d81235d8e1c06798dc341a/include/grpc%2B%2B/impl/codegen/status_code_enum.h
    /** Not an error; returned on success. */
    OK: "ok",
    /** The operation was cancelled (typically by the caller). */
    CANCELLED: "cancelled",
    /** Unknown error or an error from a different error domain. */
    UNKNOWN: "unknown",
    /**
     * Client specified an invalid argument. Note that this differs from
     * FAILED_PRECONDITION. INVALID_ARGUMENT indicates arguments that are
     * problematic regardless of the state of the system (e.g., a malformed file
     * name).
     */
    INVALID_ARGUMENT: "invalid-argument",
    /**
     * Deadline expired before operation could complete. For operations that
     * change the state of the system, this error may be returned even if the
     * operation has completed successfully. For example, a successful response
     * from a server could have been delayed long enough for the deadline to
     * expire.
     */
    DEADLINE_EXCEEDED: "deadline-exceeded",
    /** Some requested entity (e.g., file or directory) was not found. */
    NOT_FOUND: "not-found",
    /**
     * Some entity that we attempted to create (e.g., file or directory) already
     * exists.
     */
    ALREADY_EXISTS: "already-exists",
    /**
     * The caller does not have permission to execute the specified operation.
     * PERMISSION_DENIED must not be used for rejections caused by exhausting
     * some resource (use RESOURCE_EXHAUSTED instead for those errors).
     * PERMISSION_DENIED must not be used if the caller can not be identified
     * (use UNAUTHENTICATED instead for those errors).
     */
    PERMISSION_DENIED: "permission-denied",
    /**
     * The request does not have valid authentication credentials for the
     * operation.
     */
    UNAUTHENTICATED: "unauthenticated",
    /**
     * Some resource has been exhausted, perhaps a per-user quota, or perhaps the
     * entire file system is out of space.
     */
    RESOURCE_EXHAUSTED: "resource-exhausted",
    /**
     * Operation was rejected because the system is not in a state required for
     * the operation's execution. For example, directory to be deleted may be
     * non-empty, an rmdir operation is applied to a non-directory, etc.
     *
     * A litmus test that may help a service implementor in deciding
     * between FAILED_PRECONDITION, ABORTED, and UNAVAILABLE:
     *  (a) Use UNAVAILABLE if the client can retry just the failing call.
     *  (b) Use ABORTED if the client should retry at a higher-level
     *      (e.g., restarting a read-modify-write sequence).
     *  (c) Use FAILED_PRECONDITION if the client should not retry until
     *      the system state has been explicitly fixed. E.g., if an "rmdir"
     *      fails because the directory is non-empty, FAILED_PRECONDITION
     *      should be returned since the client should not retry unless
     *      they have first fixed up the directory by deleting files from it.
     *  (d) Use FAILED_PRECONDITION if the client performs conditional
     *      REST Get/Update/Delete on a resource and the resource on the
     *      server does not match the condition. E.g., conflicting
     *      read-modify-write on the same resource.
     */
    FAILED_PRECONDITION: "failed-precondition",
    /**
     * The operation was aborted, typically due to a concurrency issue like
     * sequencer check failures, transaction aborts, etc.
     *
     * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
     * and UNAVAILABLE.
     */
    ABORTED: "aborted",
    /**
     * Operation was attempted past the valid range. E.g., seeking or reading
     * past end of file.
     *
     * Unlike INVALID_ARGUMENT, this error indicates a problem that may be fixed
     * if the system state changes. For example, a 32-bit file system will
     * generate INVALID_ARGUMENT if asked to read at an offset that is not in the
     * range [0,2^32-1], but it will generate OUT_OF_RANGE if asked to read from
     * an offset past the current file size.
     *
     * There is a fair bit of overlap between FAILED_PRECONDITION and
     * OUT_OF_RANGE. We recommend using OUT_OF_RANGE (the more specific error)
     * when it applies so that callers who are iterating through a space can
     * easily look for an OUT_OF_RANGE error to detect when they are done.
     */
    OUT_OF_RANGE: "out-of-range",
    /** Operation is not implemented or not supported/enabled in this service. */
    UNIMPLEMENTED: "unimplemented",
    /**
     * Internal errors. Means some invariants expected by underlying System has
     * been broken. If you see one of these errors, Something is very broken.
     */
    INTERNAL: "internal",
    /**
     * The service is currently unavailable. This is a most likely a transient
     * condition and may be corrected by retrying with a backoff.
     *
     * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
     * and UNAVAILABLE.
     */
    UNAVAILABLE: "unavailable",
    /** Unrecoverable data loss or corruption. */
    DATA_LOSS: "data-loss"
}, S = /** @class */ function(e) {
    /** @hideconstructor */
    function n(t, n) {
        var r = this;
        return (r = e.call(this, n) || this).code = t, r.message = n, r.name = "FirebaseError", 
        // HACK: We write a toString property directly because Error is not a real
        // class and so inheritance does not work correctly. We could alternatively
        // do the same "back-door inheritance" trick that FirebaseError does.
        r.toString = function() {
            return r.name + ": [code=" + r.code + "]: " + r.message;
        }, r;
    }
    return t(n, e), n;
}(Error), U = function(t, e) {
    this.user = e, this.type = "OAuth", this.m = {}, 
    // Set the headers using Object Literal notation to avoid minification
    this.m.Authorization = "Bearer " + t;
}, q = /** @class */ function() {
    function t() {
        /**
         * Stores the listener registered with setChangeListener()
         * This isn't actually necessary since the UID never changes, but we use this
         * to verify the listen contract is adhered to in tests.
         */
        this.T = null;
    }
    return t.prototype.getToken = function() {
        return Promise.resolve(null);
    }, t.prototype.A = function() {}, t.prototype.I = function(t) {
        this.T = t, 
        // Fire with initial user.
        t(I.UNAUTHENTICATED);
    }, t.prototype.R = function() {
        this.T = null;
    }, t;
}(), j = /** @class */ function() {
    function t(t) {
        var e = this;
        /**
         * The auth token listener registered with FirebaseApp, retained here so we
         * can unregister it.
         */        this.P = null, 
        /** Tracks the current User. */
        this.currentUser = I.UNAUTHENTICATED, this.V = !1, 
        /**
             * Counter used to detect if the token changed while a getToken request was
             * outstanding.
             */
        this.p = 0, 
        /** The listener registered with setChangeListener(). */
        this.T = null, this.forceRefresh = !1, this.P = function() {
            e.p++, e.currentUser = e.g(), e.V = !0, e.T && e.T(e.currentUser);
        }, this.p = 0, this.auth = t.getImmediate({
            optional: !0
        }), this.auth ? this.auth.addAuthTokenListener(this.P) : (
        // if auth is not available, invoke tokenListener once with null token
        this.P(null), t.get().then((function(t) {
            e.auth = t, e.P && 
            // tokenListener can be removed by removeChangeListener()
            e.auth.addAuthTokenListener(e.P);
        }), (function() {})));
    }
    return t.prototype.getToken = function() {
        var t = this, e = this.p, n = this.forceRefresh;
        // Take note of the current value of the tokenCounter so that this method
        // can fail (with an ABORTED error) if there is a token change while the
        // request is outstanding.
                return this.forceRefresh = !1, this.auth ? this.auth.getToken(n).then((function(n) {
            // Cancel the request since the token changed while the request was
            // outstanding so the response is potentially for a previous user (which
            // user, we can't be sure).
            return t.p !== e ? (D("FirebaseCredentialsProvider", "getToken aborted due to token change."), 
            t.getToken()) : n ? (P("string" == typeof n.accessToken), new U(n.accessToken, t.currentUser)) : null;
        })) : Promise.resolve(null);
    }, t.prototype.A = function() {
        this.forceRefresh = !0;
    }, t.prototype.I = function(t) {
        this.T = t, 
        // Fire the initial event
        this.V && t(this.currentUser);
    }, t.prototype.R = function() {
        this.auth && this.auth.removeAuthTokenListener(this.P), this.P = null, this.T = null;
    }, 
    // Auth.getUid() can return null even with a user logged in. It is because
    // getUid() is synchronous, but the auth code populating Uid is asynchronous.
    // This method should only be called in the AuthTokenListener callback
    // to guarantee to get the actual user.
    t.prototype.g = function() {
        var t = this.auth && this.auth.getUid();
        return P(null === t || "string" == typeof t), new I(t);
    }, t;
}(), M = /** @class */ function() {
    function t(t, e) {
        this.v = t, this.C = e, this.type = "FirstParty", this.user = I._;
    }
    return Object.defineProperty(t.prototype, "m", {
        get: function() {
            var t = {
                "X-Goog-AuthUser": this.C
            }, e = this.v.auth.getAuthHeaderValueForFirstParty([]);
            // Use array notation to prevent minification
                        return e && (t.Authorization = e), t;
        },
        enumerable: !1,
        configurable: !0
    }), t;
}(), x = /** @class */ function() {
    function t(t, e) {
        this.v = t, this.C = e;
    }
    return t.prototype.getToken = function() {
        return Promise.resolve(new M(this.v, this.C));
    }, t.prototype.I = function(t) {
        // Fire with initial uid.
        t(I._);
    }, t.prototype.R = function() {}, t.prototype.A = function() {}, t;
}();

/** An error returned by a Firestore operation. */
/**
 * Builds a CredentialsProvider depending on the type of
 * the credentials passed in.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Generates `nBytes` of random bytes.
 *
 * If `nBytes < 0` , an error will be thrown.
 */
function F(t) {
    // Polyfills for IE and WebWorker by using `self` and `msCrypto` when `crypto` is not available.
    var e = 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    "undefined" != typeof self && (self.crypto || self.msCrypto), n = new Uint8Array(t);
    if (e && "function" == typeof e.getRandomValues) e.getRandomValues(n); else 
    // Falls back to Math.random
    for (var r = 0; r < t; r++) n[r] = Math.floor(256 * Math.random());
    return n;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var z = /** @class */ function() {
    function t() {}
    return t.S = function() {
        for (
        // Alphanumeric characters
        var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", e = Math.floor(256 / t.length) * t.length, n = ""
        // The largest byte value that is a multiple of `char.length`.
        ; n.length < 20; ) for (var r = F(40), i = 0; i < r.length; ++i) 
        // Only accept values that are [0, maxMultiple), this ensures they can
        // be evenly mapped to indices of `chars` via a modulo operation.
        n.length < 20 && r[i] < e && (n += t.charAt(r[i] % t.length));
        return n;
    }, t;
}();

function G(t, e) {
    return t < e ? -1 : t > e ? 1 : 0;
}

/** Helper to compare arrays using isEqual(). */ function B(t, e, n) {
    return t.length === e.length && t.every((function(t, r) {
        return n(t, e[r]);
    }));
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// The earlist date supported by Firestore timestamps (0001-01-01T00:00:00Z).
/**
 * A `Timestamp` represents a point in time independent of any time zone or
 * calendar, represented as seconds and fractions of seconds at nanosecond
 * resolution in UTC Epoch time.
 *
 * It is encoded using the Proleptic Gregorian Calendar which extends the
 * Gregorian calendar backwards to year one. It is encoded assuming all minutes
 * are 60 seconds long, i.e. leap seconds are "smeared" so that no leap second
 * table is needed for interpretation. Range is from 0001-01-01T00:00:00Z to
 * 9999-12-31T23:59:59.999999999Z.
 *
 * @see https://github.com/google/protobuf/blob/master/src/google/protobuf/timestamp.proto
 */ var W = /** @class */ function() {
    /**
     * Creates a new timestamp.
     *
     * @param seconds - The number of seconds of UTC time since Unix epoch
     *     1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to
     *     9999-12-31T23:59:59Z inclusive.
     * @param nanoseconds - The non-negative fractions of a second at nanosecond
     *     resolution. Negative second values with fractions must still have
     *     non-negative nanoseconds values that count forward in time. Must be
     *     from 0 to 999,999,999 inclusive.
     */
    function t(t, e) {
        if (this.seconds = t, this.nanoseconds = e, e < 0) throw new S(R.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
        if (e >= 1e9) throw new S(R.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
        if (t < -62135596800) throw new S(R.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
        // This will break in the year 10,000.
                if (t >= 253402300800) throw new S(R.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
    }
    /**
     * Creates a new timestamp with the current date, with millisecond precision.
     *
     * @returns a new timestamp representing the current date.
     */    return t.now = function() {
        return t.fromMillis(Date.now());
    }, 
    /**
     * Creates a new timestamp from the given date.
     *
     * @param date - The date to initialize the `Timestamp` from.
     * @returns A new `Timestamp` representing the same point in time as the given
     *     date.
     */
    t.fromDate = function(e) {
        return t.fromMillis(e.getTime());
    }, 
    /**
     * Creates a new timestamp from the given number of milliseconds.
     *
     * @param milliseconds - Number of milliseconds since Unix epoch
     *     1970-01-01T00:00:00Z.
     * @returns A new `Timestamp` representing the same point in time as the given
     *     number of milliseconds.
     */
    t.fromMillis = function(e) {
        var n = Math.floor(e / 1e3);
        return new t(n, 1e6 * (e - 1e3 * n));
    }, 
    /**
     * Converts a `Timestamp` to a JavaScript `Date` object. This conversion causes
     * a loss of precision since `Date` objects only support millisecond precision.
     *
     * @returns JavaScript `Date` object representing the same point in time as
     *     this `Timestamp`, with millisecond precision.
     */
    t.prototype.toDate = function() {
        return new Date(this.toMillis());
    }, 
    /**
     * Converts a `Timestamp` to a numeric timestamp (in milliseconds since
     * epoch). This operation causes a loss of precision.
     *
     * @returns The point in time corresponding to this timestamp, represented as
     *     the number of milliseconds since Unix epoch 1970-01-01T00:00:00Z.
     */
    t.prototype.toMillis = function() {
        return 1e3 * this.seconds + this.nanoseconds / 1e6;
    }, t.prototype.D = function(t) {
        return this.seconds === t.seconds ? G(this.nanoseconds, t.nanoseconds) : G(this.seconds, t.seconds);
    }, 
    /**
     * Returns true if this `Timestamp` is equal to the provided one.
     *
     * @param other - The `Timestamp` to compare against.
     * @returns true if this `Timestamp` is equal to the provided one.
     */
    t.prototype.isEqual = function(t) {
        return t.seconds === this.seconds && t.nanoseconds === this.nanoseconds;
    }, t.prototype.toString = function() {
        return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")";
    }, t.prototype.toJSON = function() {
        return {
            seconds: this.seconds,
            nanoseconds: this.nanoseconds
        };
    }, 
    /**
     * Converts this object to a primitive string, which allows Timestamp objects to be compared
     * using the `>`, `<=`, `>=` and `>` operators.
     */
    t.prototype.valueOf = function() {
        // This method returns a string of the form <seconds>.<nanoseconds> where <seconds> is
        // translated to have a non-negative value and both <seconds> and <nanoseconds> are left-padded
        // with zeroes to be a consistent length. Strings with this format then have a lexiographical
        // ordering that matches the expected ordering. The <seconds> translation is done to avoid
        // having a leading negative sign (i.e. a leading '-' character) in its string representation,
        // which would affect its lexiographical ordering.
        var t = this.seconds - -62135596800;
        // Note: Up to 12 decimal digits are required to represent all valid 'seconds' values.
                return String(t).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0");
    }, t;
}(), Y = /** @class */ function() {
    function t(t) {
        this.timestamp = t;
    }
    return t.N = function(e) {
        return new t(e);
    }, t.min = function() {
        return new t(new W(0, 0));
    }, t.prototype.F = function(t) {
        return this.timestamp.D(t.timestamp);
    }, t.prototype.isEqual = function(t) {
        return this.timestamp.isEqual(t.timestamp);
    }, 
    /** Returns a number representation of the version for use in spec tests. */ t.prototype.O = function() {
        // Convert to microseconds.
        return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
    }, t.prototype.toString = function() {
        return "SnapshotVersion(" + this.timestamp.toString() + ")";
    }, t.prototype.L = function() {
        return this.timestamp;
    }, t;
}(), H = /** @class */ function() {
    function t(t, e, n) {
        void 0 === e ? e = 0 : e > t.length && O(), void 0 === n ? n = t.length - e : n > t.length - e && O(), 
        this.segments = t, this.offset = e, this.$ = n;
    }
    return Object.defineProperty(t.prototype, "length", {
        get: function() {
            return this.$;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.isEqual = function(e) {
        return 0 === t.k(this, e);
    }, t.prototype.child = function(e) {
        var n = this.segments.slice(this.offset, this.limit());
        return e instanceof t ? e.forEach((function(t) {
            n.push(t);
        })) : n.push(e), this.M(n);
    }, 
    /** The index of one past the last segment of the path. */ t.prototype.limit = function() {
        return this.offset + this.length;
    }, t.prototype.U = function(t) {
        return t = void 0 === t ? 1 : t, this.M(this.segments, this.offset + t, this.length - t);
    }, t.prototype.q = function() {
        return this.M(this.segments, this.offset, this.length - 1);
    }, t.prototype.B = function() {
        return this.segments[this.offset];
    }, t.prototype.j = function() {
        return this.get(this.length - 1);
    }, t.prototype.get = function(t) {
        return this.segments[this.offset + t];
    }, t.prototype.W = function() {
        return 0 === this.length;
    }, t.prototype.G = function(t) {
        if (t.length < this.length) return !1;
        for (var e = 0; e < this.length; e++) if (this.get(e) !== t.get(e)) return !1;
        return !0;
    }, t.prototype.K = function(t) {
        if (this.length + 1 !== t.length) return !1;
        for (var e = 0; e < this.length; e++) if (this.get(e) !== t.get(e)) return !1;
        return !0;
    }, t.prototype.forEach = function(t) {
        for (var e = this.offset, n = this.limit(); e < n; e++) t(this.segments[e]);
    }, t.prototype.H = function() {
        return this.segments.slice(this.offset, this.limit());
    }, t.k = function(t, e) {
        for (var n = Math.min(t.length, e.length), r = 0; r < n; r++) {
            var i = t.get(r), o = e.get(r);
            if (i < o) return -1;
            if (i > o) return 1;
        }
        return t.length < e.length ? -1 : t.length > e.length ? 1 : 0;
    }, t;
}(), Q = /** @class */ function(e) {
    function n() {
        return null !== e && e.apply(this, arguments) || this;
    }
    return t(n, e), n.prototype.M = function(t, e, r) {
        return new n(t, e, r);
    }, n.prototype.Y = function() {
        // NOTE: The client is ignorant of any path segments containing escape
        // sequences (e.g. __id123__) and just passes them through raw (they exist
        // for legacy reasons and should not be used frequently).
        return this.H().join("/");
    }, n.prototype.toString = function() {
        return this.Y();
    }, 
    /**
     * Creates a resource path from the given slash-delimited string. If multiple
     * arguments are provided, all components are combined. Leading and trailing
     * slashes from all components are ignored.
     */
    n.J = function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        // NOTE: The client is ignorant of any path segments containing escape
        // sequences (e.g. __id123__) and just passes them through raw (they exist
        // for legacy reasons and should not be used frequently).
                for (var r = [], i = 0, o = t; i < o.length; i++) {
            var u = o[i];
            if (u.indexOf("//") >= 0) throw new S(R.INVALID_ARGUMENT, "Invalid segment (" + u + "). Paths must not contain // in them.");
            // Strip leading and traling slashed.
                        r.push.apply(r, u.split("/").filter((function(t) {
                return t.length > 0;
            })));
        }
        return new n(r);
    }, n.X = function() {
        return new n([]);
    }, n;
}(H), X = /^[_a-zA-Z][_a-zA-Z0-9]*$/, K = /** @class */ function(e) {
    function n() {
        return null !== e && e.apply(this, arguments) || this;
    }
    return t(n, e), n.prototype.M = function(t, e, r) {
        return new n(t, e, r);
    }, 
    /**
     * Returns true if the string could be used as a segment in a field path
     * without escaping.
     */
    n.Z = function(t) {
        return X.test(t);
    }, n.prototype.Y = function() {
        return this.H().map((function(t) {
            return t = t.replace(/\\/g, "\\\\").replace(/`/g, "\\`"), n.Z(t) || (t = "`" + t + "`"), 
            t;
        })).join(".");
    }, n.prototype.toString = function() {
        return this.Y();
    }, 
    /**
     * Returns true if this field references the key of a document.
     */
    n.prototype.tt = function() {
        return 1 === this.length && "__name__" === this.get(0);
    }, 
    /**
     * The field designating the key of a document.
     */
    n.nt = function() {
        return new n([ "__name__" ]);
    }, 
    /**
     * Parses a field string from the given server-formatted string.
     *
     * - Splitting the empty string is not allowed (for now at least).
     * - Empty segments within the string (e.g. if there are two consecutive
     *   separators) are not allowed.
     *
     * TODO(b/37244157): we should make this more strict. Right now, it allows
     * non-identifier path components, even if they aren't escaped.
     */
    n.et = function(t) {
        for (var e = [], r = "", i = 0, o = function() {
            if (0 === r.length) throw new S(R.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not be empty, begin with '.', end with '.', or contain '..'");
            e.push(r), r = "";
        }, u = !1; i < t.length; ) {
            var s = t[i];
            if ("\\" === s) {
                if (i + 1 === t.length) throw new S(R.INVALID_ARGUMENT, "Path has trailing escape character: " + t);
                var a = t[i + 1];
                if ("\\" !== a && "." !== a && "`" !== a) throw new S(R.INVALID_ARGUMENT, "Path has invalid escape sequence: " + t);
                r += a, i += 2;
            } else "`" === s ? (u = !u, i++) : "." !== s || u ? (r += s, i++) : (o(), i++);
        }
        if (o(), u) throw new S(R.INVALID_ARGUMENT, "Unterminated ` in path: " + t);
        return new n(e);
    }, n.X = function() {
        return new n([]);
    }, n;
}(H), J = /** @class */ function() {
    function t(t) {
        this.path = t;
    }
    return t.st = function(e) {
        return new t(Q.J(e));
    }, t.it = function(e) {
        return new t(Q.J(e).U(5));
    }, 
    /** Returns true if the document is in the specified collectionId. */ t.prototype.rt = function(t) {
        return this.path.length >= 2 && this.path.get(this.path.length - 2) === t;
    }, t.prototype.isEqual = function(t) {
        return null !== t && 0 === Q.k(this.path, t.path);
    }, t.prototype.toString = function() {
        return this.path.toString();
    }, t.k = function(t, e) {
        return Q.k(t.path, e.path);
    }, t.ot = function(t) {
        return t.length % 2 == 0;
    }, 
    /**
     * Creates and returns a new document key with the given segments.
     *
     * @param segments - The segments of the path to the document
     * @returns A new instance of DocumentKey
     */
    t.ut = function(e) {
        return new t(new Q(e.slice()));
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A version of a document in Firestore. This corresponds to the version
 * timestamp, such as update_time or read_time.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns whether a variable is either undefined or null.
 */
function $(t) {
    return null == t;
}

/** Returns whether the value represents -0. */ function Z(t) {
    // Detect if the value is -0.0. Based on polyfill from
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
    return 0 === t && 1 / t == -1 / 0;
}

/**
 * Returns whether a value is an integer and in the safe integer range
 * @param value - The value to test for being an integer and in the safe range
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Visible for testing
var tt = function(t, e, n, r, i, o, u) {
    void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), 
    void 0 === i && (i = null), void 0 === o && (o = null), void 0 === u && (u = null), 
    this.path = t, this.collectionGroup = e, this.orderBy = n, this.filters = r, this.limit = i, 
    this.startAt = o, this.endAt = u, this.ct = null;
};

/**
 * Initializes a Target with a path and optional additional query constraints.
 * Path must currently be empty if this is a collection group query.
 *
 * NOTE: you should always construct `Target` from `Query.toTarget` instead of
 * using this factory method, because `Query` provides an implicit `orderBy`
 * property.
 */ function et(t, e, n, r, i, o, u) {
    return void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), 
    void 0 === i && (i = null), void 0 === o && (o = null), void 0 === u && (u = null), 
    new tt(t, e, n, r, i, o, u);
}

function nt(t) {
    var e = L(t);
    if (null === e.ct) {
        var n = e.path.Y();
        null !== e.collectionGroup && (n += "|cg:" + e.collectionGroup), n += "|f:", n += e.filters.map((function(t) {
            return function(t) {
                // TODO(b/29183165): Technically, this won't be unique if two values have
                // the same description, such as the int 3 and the string "3". So we should
                // add the types in here somehow, too.
                return t.field.Y() + t.op.toString() + Jt(t.value);
            }(t);
        })).join(","), n += "|ob:", n += e.orderBy.map((function(t) {
            return function(t) {
                // TODO(b/29183165): Make this collision robust.
                return t.field.Y() + t.dir;
            }(t);
        })).join(","), $(e.limit) || (n += "|l:", n += e.limit), e.startAt && (n += "|lb:", 
        n += Jn(e.startAt)), e.endAt && (n += "|ub:", n += Jn(e.endAt)), e.ct = n;
    }
    return e.ct;
}

function rt(t, e) {
    if (t.limit !== e.limit) return !1;
    if (t.orderBy.length !== e.orderBy.length) return !1;
    for (var n = 0; n < t.orderBy.length; n++) if (!nr(t.orderBy[n], e.orderBy[n])) return !1;
    if (t.filters.length !== e.filters.length) return !1;
    for (var r = 0; r < t.filters.length; r++) if (i = t.filters[r], o = e.filters[r], 
    i.op !== o.op || !i.field.isEqual(o.field) || !Ht(i.value, o.value)) return !1;
    var i, o;
    return t.collectionGroup === e.collectionGroup && !!t.path.isEqual(e.path) && !!Zn(t.startAt, e.startAt) && Zn(t.endAt, e.endAt);
}

function it(t) {
    return J.ot(t.path) && null === t.collectionGroup && 0 === t.filters.length;
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Converts a Base64 encoded string to a binary string. */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Immutable class that represents a "proto" byte string.
 *
 * Proto byte strings can either be Base64-encoded strings or Uint8Arrays when
 * sent on the wire. This class abstracts away this differentiation by holding
 * the proto byte string in a common class that must be converted into a string
 * before being sent as a proto.
 */ var ot = /** @class */ function() {
    function t(t) {
        this.ht = t;
    }
    return t.fromBase64String = function(e) {
        return new t(atob(e));
    }, t.fromUint8Array = function(e) {
        return new t(
        /**
 * Helper function to convert an Uint8array to a binary string.
 */
        function(t) {
            for (var e = "", n = 0; n < t.length; ++n) e += String.fromCharCode(t[n]);
            return e;
        }(e));
    }, t.prototype.toBase64 = function() {
        return t = this.ht, btoa(t);
        /** Converts a binary string to a Base64 encoded string. */        var t;
        /** True if and only if the Base64 conversion functions are available. */    }, 
    t.prototype.toUint8Array = function() {
        return function(t) {
            for (var e = new Uint8Array(t.length), n = 0; n < t.length; n++) e[n] = t.charCodeAt(n);
            return e;
        }(this.ht);
    }, t.prototype.at = function() {
        return 2 * this.ht.length;
    }, t.prototype.F = function(t) {
        return G(this.ht, t.ht);
    }, t.prototype.isEqual = function(t) {
        return this.ht === t.ht;
    }, t;
}();

ot.lt = new ot("");

var ut, st, at = /** @class */ function() {
    function t(
    /** The target being listened to. */
    t, 
    /**
     * The target ID to which the target corresponds; Assigned by the
     * LocalStore for user listens and by the SyncEngine for limbo watches.
     */
    e, 
    /** The purpose of the target. */
    n, 
    /**
     * The sequence number of the last transaction during which this target data
     * was modified.
     */
    r, 
    /** The latest snapshot version seen for this target. */
    i
    /**
     * The maximum snapshot version at which the associated view
     * contained no limbo documents.
     */ , o
    /**
     * An opaque, server-assigned token that allows watching a target to be
     * resumed after disconnecting without retransmitting all the data that
     * matches the target. The resume token essentially identifies a point in
     * time from which the server should resume sending results.
     */ , u) {
        void 0 === i && (i = Y.min()), void 0 === o && (o = Y.min()), void 0 === u && (u = ot.lt), 
        this.target = t, this.targetId = e, this._t = n, this.sequenceNumber = r, this.ft = i, 
        this.lastLimboFreeSnapshotVersion = o, this.resumeToken = u;
    }
    /** Creates a new target data instance with an updated sequence number. */    return t.prototype.dt = function(e) {
        return new t(this.target, this.targetId, this._t, e, this.ft, this.lastLimboFreeSnapshotVersion, this.resumeToken);
    }, 
    /**
     * Creates a new target data instance with an updated resume token and
     * snapshot version.
     */
    t.prototype.wt = function(e, n) {
        return new t(this.target, this.targetId, this._t, this.sequenceNumber, n, this.lastLimboFreeSnapshotVersion, e);
    }, 
    /**
     * Creates a new target data instance with an updated last limbo free
     * snapshot version number.
     */
    t.prototype.Et = function(e) {
        return new t(this.target, this.targetId, this._t, this.sequenceNumber, this.ft, e, this.resumeToken);
    }, t;
}(), ct = 
// TODO(b/33078163): just use simplest form of existence filter for now
function(t) {
    this.count = t;
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Determines whether an error code represents a permanent error when received
 * in response to a non-write operation.
 *
 * See isPermanentWriteError for classifying write errors.
 */
function ht(t) {
    switch (t) {
      case R.OK:
        return O();

      case R.CANCELLED:
      case R.UNKNOWN:
      case R.DEADLINE_EXCEEDED:
      case R.RESOURCE_EXHAUSTED:
      case R.INTERNAL:
      case R.UNAVAILABLE:
 // Unauthenticated means something went wrong with our token and we need
        // to retry with new credentials which will happen automatically.
              case R.UNAUTHENTICATED:
        return !1;

      case R.INVALID_ARGUMENT:
      case R.NOT_FOUND:
      case R.ALREADY_EXISTS:
      case R.PERMISSION_DENIED:
      case R.FAILED_PRECONDITION:
 // Aborted might be retried in some scenarios, but that is dependant on
        // the context and should handled individually by the calling code.
        // See https://cloud.google.com/apis/design/errors.
              case R.ABORTED:
      case R.OUT_OF_RANGE:
      case R.UNIMPLEMENTED:
      case R.DATA_LOSS:
        return !0;

      default:
        return O();
    }
}

/**
 * Determines whether an error code represents a permanent error when received
 * in response to a write operation.
 *
 * Write operations must be handled specially because as of b/119437764, ABORTED
 * errors on the write stream should be retried too (even though ABORTED errors
 * are not generally retryable).
 *
 * Note that during the initial handshake on the write stream an ABORTED error
 * signals that we should discard our stream token (i.e. it is permanent). This
 * means a handshake error should be classified with isPermanentError, above.
 */
/**
 * Maps an error Code from GRPC status code number, like 0, 1, or 14. These
 * are not the same as HTTP status codes.
 *
 * @returns The Code equivalent to the given GRPC status code. Fails if there
 *     is no match.
 */ function ft(t) {
    if (void 0 === t) 
    // This shouldn't normally happen, but in certain error cases (like trying
    // to send invalid proto messages) we may get an error with no GRPC code.
    return k("GRPC error has no .code"), R.UNKNOWN;
    switch (t) {
      case ut.OK:
        return R.OK;

      case ut.CANCELLED:
        return R.CANCELLED;

      case ut.UNKNOWN:
        return R.UNKNOWN;

      case ut.DEADLINE_EXCEEDED:
        return R.DEADLINE_EXCEEDED;

      case ut.RESOURCE_EXHAUSTED:
        return R.RESOURCE_EXHAUSTED;

      case ut.INTERNAL:
        return R.INTERNAL;

      case ut.UNAVAILABLE:
        return R.UNAVAILABLE;

      case ut.UNAUTHENTICATED:
        return R.UNAUTHENTICATED;

      case ut.INVALID_ARGUMENT:
        return R.INVALID_ARGUMENT;

      case ut.NOT_FOUND:
        return R.NOT_FOUND;

      case ut.ALREADY_EXISTS:
        return R.ALREADY_EXISTS;

      case ut.PERMISSION_DENIED:
        return R.PERMISSION_DENIED;

      case ut.FAILED_PRECONDITION:
        return R.FAILED_PRECONDITION;

      case ut.ABORTED:
        return R.ABORTED;

      case ut.OUT_OF_RANGE:
        return R.OUT_OF_RANGE;

      case ut.UNIMPLEMENTED:
        return R.UNIMPLEMENTED;

      case ut.DATA_LOSS:
        return R.DATA_LOSS;

      default:
        return O();
    }
}

/**
 * Converts an HTTP response's error status to the equivalent error code.
 *
 * @param status - An HTTP error response status ("FAILED_PRECONDITION",
 * "UNKNOWN", etc.)
 * @returns The equivalent Code. Non-matching responses are mapped to
 *     Code.UNKNOWN.
 */ (st = ut || (ut = {}))[st.OK = 0] = "OK", st[st.CANCELLED = 1] = "CANCELLED", 
st[st.UNKNOWN = 2] = "UNKNOWN", st[st.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", 
st[st.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", st[st.NOT_FOUND = 5] = "NOT_FOUND", 
st[st.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", st[st.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", 
st[st.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", st[st.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", 
st[st.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", st[st.ABORTED = 10] = "ABORTED", 
st[st.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", st[st.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", 
st[st.INTERNAL = 13] = "INTERNAL", st[st.UNAVAILABLE = 14] = "UNAVAILABLE", st[st.DATA_LOSS = 15] = "DATA_LOSS";

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// An immutable sorted map implementation, based on a Left-leaning Red-Black
// tree.
var lt = /** @class */ function() {
    function t(t, e) {
        this.k = t, this.root = e || dt.EMPTY;
    }
    // Returns a copy of the map, with the specified key/value added or replaced.
        return t.prototype.Tt = function(e, n) {
        return new t(this.k, this.root.Tt(e, n, this.k).copy(null, null, dt.At, null, null));
    }, 
    // Returns a copy of the map, with the specified key removed.
    t.prototype.remove = function(e) {
        return new t(this.k, this.root.remove(e, this.k).copy(null, null, dt.At, null, null));
    }, 
    // Returns the value of the node with the given key, or null.
    t.prototype.get = function(t) {
        for (var e = this.root; !e.W(); ) {
            var n = this.k(t, e.key);
            if (0 === n) return e.value;
            n < 0 ? e = e.left : n > 0 && (e = e.right);
        }
        return null;
    }, 
    // Returns the index of the element in this sorted map, or -1 if it doesn't
    // exist.
    t.prototype.indexOf = function(t) {
        for (
        // Number of nodes that were pruned when descending right
        var e = 0, n = this.root; !n.W(); ) {
            var r = this.k(t, n.key);
            if (0 === r) return e + n.left.size;
            r < 0 ? n = n.left : (
            // Count all nodes left of the node plus the node itself
            e += n.left.size + 1, n = n.right);
        }
        // Node not found
                return -1;
    }, t.prototype.W = function() {
        return this.root.W();
    }, Object.defineProperty(t.prototype, "size", {
        // Returns the total number of nodes in the map.
        get: function() {
            return this.root.size;
        },
        enumerable: !1,
        configurable: !0
    }), 
    // Returns the minimum key in the map.
    t.prototype.It = function() {
        return this.root.It();
    }, 
    // Returns the maximum key in the map.
    t.prototype.Rt = function() {
        return this.root.Rt();
    }, 
    // Traverses the map in key order and calls the specified action function
    // for each key/value pair. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    t.prototype.Pt = function(t) {
        return this.root.Pt(t);
    }, t.prototype.forEach = function(t) {
        this.Pt((function(e, n) {
            return t(e, n), !1;
        }));
    }, t.prototype.toString = function() {
        var t = [];
        return this.Pt((function(e, n) {
            return t.push(e + ":" + n), !1;
        })), "{" + t.join(", ") + "}";
    }, 
    // Traverses the map in reverse key order and calls the specified action
    // function for each key/value pair. If action returns true, traversal is
    // aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    t.prototype.yt = function(t) {
        return this.root.yt(t);
    }, 
    // Returns an iterator over the SortedMap.
    t.prototype.Vt = function() {
        return new pt(this.root, null, this.k, !1);
    }, t.prototype.gt = function(t) {
        return new pt(this.root, t, this.k, !1);
    }, t.prototype.vt = function() {
        return new pt(this.root, null, this.k, !0);
    }, t.prototype.bt = function(t) {
        return new pt(this.root, t, this.k, !0);
    }, t;
}(), pt = /** @class */ function() {
    function t(t, e, n, r) {
        this.Ct = r, this.St = [];
        for (var i = 1; !t.W(); ) if (i = e ? n(t.key, e) : 1, 
        // flip the comparison if we're going in reverse
        r && (i *= -1), i < 0) 
        // This node is less than our start key. ignore it
        t = this.Ct ? t.left : t.right; else {
            if (0 === i) {
                // This node is exactly equal to our start key. Push it on the stack,
                // but stop iterating;
                this.St.push(t);
                break;
            }
            // This node is greater than our start key, add it to the stack and move
            // to the next one
                        this.St.push(t), t = this.Ct ? t.right : t.left;
        }
    }
    return t.prototype.Dt = function() {
        var t = this.St.pop(), e = {
            key: t.key,
            value: t.value
        };
        if (this.Ct) for (t = t.left; !t.W(); ) this.St.push(t), t = t.right; else for (t = t.right; !t.W(); ) this.St.push(t), 
        t = t.left;
        return e;
    }, t.prototype.Nt = function() {
        return this.St.length > 0;
    }, t.prototype.xt = function() {
        if (0 === this.St.length) return null;
        var t = this.St[this.St.length - 1];
        return {
            key: t.key,
            value: t.value
        };
    }, t;
}(), dt = /** @class */ function() {
    function t(e, n, r, i, o) {
        this.key = e, this.value = n, this.color = null != r ? r : t.RED, this.left = null != i ? i : t.EMPTY, 
        this.right = null != o ? o : t.EMPTY, this.size = this.left.size + 1 + this.right.size;
    }
    // Returns a copy of the current node, optionally replacing pieces of it.
        return t.prototype.copy = function(e, n, r, i, o) {
        return new t(null != e ? e : this.key, null != n ? n : this.value, null != r ? r : this.color, null != i ? i : this.left, null != o ? o : this.right);
    }, t.prototype.W = function() {
        return !1;
    }, 
    // Traverses the tree in key order and calls the specified action function
    // for each node. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    t.prototype.Pt = function(t) {
        return this.left.Pt(t) || t(this.key, this.value) || this.right.Pt(t);
    }, 
    // Traverses the tree in reverse key order and calls the specified action
    // function for each node. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    t.prototype.yt = function(t) {
        return this.right.yt(t) || t(this.key, this.value) || this.left.yt(t);
    }, 
    // Returns the minimum node in the tree.
    t.prototype.min = function() {
        return this.left.W() ? this : this.left.min();
    }, 
    // Returns the maximum key in the tree.
    t.prototype.It = function() {
        return this.min().key;
    }, 
    // Returns the maximum key in the tree.
    t.prototype.Rt = function() {
        return this.right.W() ? this.key : this.right.Rt();
    }, 
    // Returns new tree, with the key/value added.
    t.prototype.Tt = function(t, e, n) {
        var r = this, i = n(t, r.key);
        return (r = i < 0 ? r.copy(null, null, null, r.left.Tt(t, e, n), null) : 0 === i ? r.copy(null, e, null, null, null) : r.copy(null, null, null, null, r.right.Tt(t, e, n))).Ft();
    }, t.prototype.Ot = function() {
        if (this.left.W()) return t.EMPTY;
        var e = this;
        return e.left.Lt() || e.left.left.Lt() || (e = e.$t()), (e = e.copy(null, null, null, e.left.Ot(), null)).Ft();
    }, 
    // Returns new tree, with the specified item removed.
    t.prototype.remove = function(e, n) {
        var r, i = this;
        if (n(e, i.key) < 0) i.left.W() || i.left.Lt() || i.left.left.Lt() || (i = i.$t()), 
        i = i.copy(null, null, null, i.left.remove(e, n), null); else {
            if (i.left.Lt() && (i = i.kt()), i.right.W() || i.right.Lt() || i.right.left.Lt() || (i = i.Mt()), 
            0 === n(e, i.key)) {
                if (i.right.W()) return t.EMPTY;
                r = i.right.min(), i = i.copy(r.key, r.value, null, null, i.right.Ot());
            }
            i = i.copy(null, null, null, null, i.right.remove(e, n));
        }
        return i.Ft();
    }, t.prototype.Lt = function() {
        return this.color;
    }, 
    // Returns new tree after performing any needed rotations.
    t.prototype.Ft = function() {
        var t = this;
        return t.right.Lt() && !t.left.Lt() && (t = t.Ut()), t.left.Lt() && t.left.left.Lt() && (t = t.kt()), 
        t.left.Lt() && t.right.Lt() && (t = t.qt()), t;
    }, t.prototype.$t = function() {
        var t = this.qt();
        return t.right.left.Lt() && (t = (t = (t = t.copy(null, null, null, null, t.right.kt())).Ut()).qt()), 
        t;
    }, t.prototype.Mt = function() {
        var t = this.qt();
        return t.left.left.Lt() && (t = (t = t.kt()).qt()), t;
    }, t.prototype.Ut = function() {
        var e = this.copy(null, null, t.RED, null, this.right.left);
        return this.right.copy(null, null, this.color, e, null);
    }, t.prototype.kt = function() {
        var e = this.copy(null, null, t.RED, this.left.right, null);
        return this.left.copy(null, null, this.color, null, e);
    }, t.prototype.qt = function() {
        var t = this.left.copy(null, null, !this.left.color, null, null), e = this.right.copy(null, null, !this.right.color, null, null);
        return this.copy(null, null, !this.color, t, e);
    }, 
    // For testing.
    t.prototype.Bt = function() {
        var t = this.Qt();
        return Math.pow(2, t) <= this.size + 1;
    }, 
    // In a balanced RB tree, the black-depth (number of black nodes) from root to
    // leaves is equal on both sides.  This function verifies that or asserts.
    t.prototype.Qt = function() {
        if (this.Lt() && this.left.Lt()) throw O();
        if (this.right.Lt()) throw O();
        var t = this.left.Qt();
        if (t !== this.right.Qt()) throw O();
        return t + (this.Lt() ? 0 : 1);
    }, t;
}();

// end SortedMap
// An iterator over an LLRBNode.
// end LLRBNode
// Empty node is shared between all LLRB trees.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
dt.EMPTY = null, dt.RED = !0, dt.At = !1, 
// end LLRBEmptyNode
dt.EMPTY = new (/** @class */ function() {
    function t() {
        this.size = 0;
    }
    return Object.defineProperty(t.prototype, "key", {
        get: function() {
            throw O();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "value", {
        get: function() {
            throw O();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "color", {
        get: function() {
            throw O();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "left", {
        get: function() {
            throw O();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "right", {
        get: function() {
            throw O();
        },
        enumerable: !1,
        configurable: !0
    }), 
    // Returns a copy of the current node.
    t.prototype.copy = function(t, e, n, r, i) {
        return this;
    }, 
    // Returns a copy of the tree, with the specified key/value added.
    t.prototype.Tt = function(t, e, n) {
        return new dt(t, e);
    }, 
    // Returns a copy of the tree, with the specified key removed.
    t.prototype.remove = function(t, e) {
        return this;
    }, t.prototype.W = function() {
        return !0;
    }, t.prototype.Pt = function(t) {
        return !1;
    }, t.prototype.yt = function(t) {
        return !1;
    }, t.prototype.It = function() {
        return null;
    }, t.prototype.Rt = function() {
        return null;
    }, t.prototype.Lt = function() {
        return !1;
    }, 
    // For testing.
    t.prototype.Bt = function() {
        return !0;
    }, t.prototype.Qt = function() {
        return 0;
    }, t;
}());

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * SortedSet is an immutable (copy-on-write) collection that holds elements
 * in order specified by the provided comparator.
 *
 * NOTE: if provided comparator returns 0 for two elements, we consider them to
 * be equal!
 */
var vt = /** @class */ function() {
    function t(t) {
        this.k = t, this.data = new lt(this.k);
    }
    return t.prototype.has = function(t) {
        return null !== this.data.get(t);
    }, t.prototype.first = function() {
        return this.data.It();
    }, t.prototype.last = function() {
        return this.data.Rt();
    }, Object.defineProperty(t.prototype, "size", {
        get: function() {
            return this.data.size;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.indexOf = function(t) {
        return this.data.indexOf(t);
    }, 
    /** Iterates elements in order defined by "comparator" */ t.prototype.forEach = function(t) {
        this.data.Pt((function(e, n) {
            return t(e), !1;
        }));
    }, 
    /** Iterates over `elem`s such that: range[0] &lt;= elem &lt; range[1]. */ t.prototype.jt = function(t, e) {
        for (var n = this.data.gt(t[0]); n.Nt(); ) {
            var r = n.Dt();
            if (this.k(r.key, t[1]) >= 0) return;
            e(r.key);
        }
    }, 
    /**
     * Iterates over `elem`s such that: start &lt;= elem until false is returned.
     */
    t.prototype.Wt = function(t, e) {
        var n;
        for (n = void 0 !== e ? this.data.gt(e) : this.data.Vt(); n.Nt(); ) if (!t(n.Dt().key)) return;
    }, 
    /** Finds the least element greater than or equal to `elem`. */ t.prototype.Gt = function(t) {
        var e = this.data.gt(t);
        return e.Nt() ? e.Dt().key : null;
    }, t.prototype.Vt = function() {
        return new yt(this.data.Vt());
    }, t.prototype.gt = function(t) {
        return new yt(this.data.gt(t));
    }, 
    /** Inserts or updates an element */ t.prototype.add = function(t) {
        return this.copy(this.data.remove(t).Tt(t, !0));
    }, 
    /** Deletes an element */ t.prototype.delete = function(t) {
        return this.has(t) ? this.copy(this.data.remove(t)) : this;
    }, t.prototype.W = function() {
        return this.data.W();
    }, t.prototype.Kt = function(t) {
        var e = this;
        // Make sure `result` always refers to the larger one of the two sets.
                return e.size < t.size && (e = t, t = this), t.forEach((function(t) {
            e = e.add(t);
        })), e;
    }, t.prototype.isEqual = function(e) {
        if (!(e instanceof t)) return !1;
        if (this.size !== e.size) return !1;
        for (var n = this.data.Vt(), r = e.data.Vt(); n.Nt(); ) {
            var i = n.Dt().key, o = r.Dt().key;
            if (0 !== this.k(i, o)) return !1;
        }
        return !0;
    }, t.prototype.H = function() {
        var t = [];
        return this.forEach((function(e) {
            t.push(e);
        })), t;
    }, t.prototype.toString = function() {
        var t = [];
        return this.forEach((function(e) {
            return t.push(e);
        })), "SortedSet(" + t.toString() + ")";
    }, t.prototype.copy = function(e) {
        var n = new t(this.k);
        return n.data = e, n;
    }, t;
}(), yt = /** @class */ function() {
    function t(t) {
        this.zt = t;
    }
    return t.prototype.Dt = function() {
        return this.zt.Dt().key;
    }, t.prototype.Nt = function() {
        return this.zt.Nt();
    }, t;
}(), gt = new lt(J.k);

function mt() {
    return gt;
}

function wt() {
    return mt();
}

var bt = new lt(J.k);

function Et() {
    return bt;
}

var Tt = new lt(J.k), Nt = new vt(J.k);

function It() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    for (var n = Nt, r = 0, i = t; r < i.length; r++) {
        var o = i[r];
        n = n.add(o);
    }
    return n;
}

var At = new vt(G);

function Ct() {
    return At;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * DocumentSet is an immutable (copy-on-write) collection that holds documents
 * in order specified by the provided comparator. We always add a document key
 * comparator on top of what is provided to guarantee document equality based on
 * the key.
 */ var Dt = /** @class */ function() {
    /** The default ordering is by key if the comparator is omitted */
    function t(t) {
        // We are adding document key comparator to the end as it's the only
        // guaranteed unique property of a document.
        this.k = t ? function(e, n) {
            return t(e, n) || J.k(e.key, n.key);
        } : function(t, e) {
            return J.k(t.key, e.key);
        }, this.Ht = Et(), this.Yt = new lt(this.k)
        /**
     * Returns an empty copy of the existing DocumentSet, using the same
     * comparator.
     */;
    }
    return t.Jt = function(e) {
        return new t(e.k);
    }, t.prototype.has = function(t) {
        return null != this.Ht.get(t);
    }, t.prototype.get = function(t) {
        return this.Ht.get(t);
    }, t.prototype.first = function() {
        return this.Yt.It();
    }, t.prototype.last = function() {
        return this.Yt.Rt();
    }, t.prototype.W = function() {
        return this.Yt.W();
    }, 
    /**
     * Returns the index of the provided key in the document set, or -1 if the
     * document key is not present in the set;
     */
    t.prototype.indexOf = function(t) {
        var e = this.Ht.get(t);
        return e ? this.Yt.indexOf(e) : -1;
    }, Object.defineProperty(t.prototype, "size", {
        get: function() {
            return this.Yt.size;
        },
        enumerable: !1,
        configurable: !0
    }), 
    /** Iterates documents in order defined by "comparator" */ t.prototype.forEach = function(t) {
        this.Yt.Pt((function(e, n) {
            return t(e), !1;
        }));
    }, 
    /** Inserts or updates a document with the same key */ t.prototype.add = function(t) {
        // First remove the element if we have it.
        var e = this.delete(t.key);
        return e.copy(e.Ht.Tt(t.key, t), e.Yt.Tt(t, null));
    }, 
    /** Deletes a document with a given key */ t.prototype.delete = function(t) {
        var e = this.get(t);
        return e ? this.copy(this.Ht.remove(t), this.Yt.remove(e)) : this;
    }, t.prototype.isEqual = function(e) {
        if (!(e instanceof t)) return !1;
        if (this.size !== e.size) return !1;
        for (var n = this.Yt.Vt(), r = e.Yt.Vt(); n.Nt(); ) {
            var i = n.Dt().key, o = r.Dt().key;
            if (!i.isEqual(o)) return !1;
        }
        return !0;
    }, t.prototype.toString = function() {
        var t = [];
        return this.forEach((function(e) {
            t.push(e.toString());
        })), 0 === t.length ? "DocumentSet ()" : "DocumentSet (\n  " + t.join("  \n") + "\n)";
    }, t.prototype.copy = function(e, n) {
        var r = new t;
        return r.k = this.k, r.Ht = e, r.Yt = n, r;
    }, t;
}(), kt = /** @class */ function() {
    function t() {
        this.Xt = new lt(J.k);
    }
    return t.prototype.track = function(t) {
        var e = t.doc.key, n = this.Xt.get(e);
        n ? 
        // Merge the new change with the existing change.
        0 /* Added */ !== t.type && 3 /* Metadata */ === n.type ? this.Xt = this.Xt.Tt(e, t) : 3 /* Metadata */ === t.type && 1 /* Removed */ !== n.type ? this.Xt = this.Xt.Tt(e, {
            type: n.type,
            doc: t.doc
        }) : 2 /* Modified */ === t.type && 2 /* Modified */ === n.type ? this.Xt = this.Xt.Tt(e, {
            type: 2 /* Modified */ ,
            doc: t.doc
        }) : 2 /* Modified */ === t.type && 0 /* Added */ === n.type ? this.Xt = this.Xt.Tt(e, {
            type: 0 /* Added */ ,
            doc: t.doc
        }) : 1 /* Removed */ === t.type && 0 /* Added */ === n.type ? this.Xt = this.Xt.remove(e) : 1 /* Removed */ === t.type && 2 /* Modified */ === n.type ? this.Xt = this.Xt.Tt(e, {
            type: 1 /* Removed */ ,
            doc: n.doc
        }) : 0 /* Added */ === t.type && 1 /* Removed */ === n.type ? this.Xt = this.Xt.Tt(e, {
            type: 2 /* Modified */ ,
            doc: t.doc
        }) : 
        // This includes these cases, which don't make sense:
        // Added->Added
        // Removed->Removed
        // Modified->Added
        // Removed->Modified
        // Metadata->Added
        // Removed->Metadata
        O() : this.Xt = this.Xt.Tt(e, t);
    }, t.prototype.Zt = function() {
        var t = [];
        return this.Xt.Pt((function(e, n) {
            t.push(n);
        })), t;
    }, t;
}(), Vt = /** @class */ function() {
    function t(t, e, n, r, i, o, u, s) {
        this.query = t, this.docs = e, this.tn = n, this.docChanges = r, this.nn = i, this.fromCache = o, 
        this.en = u, this.sn = s
        /** Returns a view snapshot as if all documents in the snapshot were added. */;
    }
    return t.rn = function(e, n, r, i) {
        var o = [];
        return n.forEach((function(t) {
            o.push({
                type: 0 /* Added */ ,
                doc: t
            });
        })), new t(e, n, Dt.Jt(n), o, r, i, 
        /* syncStateChanged= */ !0, 
        /* excludesMetadataChanges= */ !1);
    }, Object.defineProperty(t.prototype, "hasPendingWrites", {
        get: function() {
            return !this.nn.W();
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.isEqual = function(t) {
        if (!(this.fromCache === t.fromCache && this.en === t.en && this.nn.isEqual(t.nn) && Un(this.query, t.query) && this.docs.isEqual(t.docs) && this.tn.isEqual(t.tn))) return !1;
        var e = this.docChanges, n = t.docChanges;
        if (e.length !== n.length) return !1;
        for (var r = 0; r < e.length; r++) if (e[r].type !== n[r].type || !e[r].doc.isEqual(n[r].doc)) return !1;
        return !0;
    }, t;
}(), _t = /** @class */ function() {
    function t(
    /**
     * The snapshot version this event brings us up to, or MIN if not set.
     */
    t, 
    /**
     * A map from target to changes to the target. See TargetChange.
     */
    e, 
    /**
     * A set of targets that is known to be inconsistent. Listens for these
     * targets should be re-established without resume tokens.
     */
    n, 
    /**
     * A set of which documents have changed or been deleted, along with the
     * doc's new values (if not deleted).
     */
    r, 
    /**
     * A set of which document updates are due only to limbo resolution targets.
     */
    i) {
        this.ft = t, this.on = e, this.un = n, this.cn = r, this.hn = i;
    }
    /**
     * HACK: Views require RemoteEvents in order to determine whether the view is
     * CURRENT, but secondary tabs don't receive remote events. So this method is
     * used to create a synthesized RemoteEvent that can be used to apply a
     * CURRENT status change to a View, for queries executed in a different tab.
     */
    // PORTING NOTE: Multi-tab only
        return t.an = function(e, n) {
        var r = new Map;
        return r.set(e, Ot.ln(e, n)), new t(Y.min(), r, Ct(), mt(), It());
    }, t;
}(), Ot = /** @class */ function() {
    function t(
    /**
     * An opaque, server-assigned token that allows watching a query to be resumed
     * after disconnecting without retransmitting all the data that matches the
     * query. The resume token essentially identifies a point in time from which
     * the server should resume sending results.
     */
    t, 
    /**
     * The "current" (synced) status of this target. Note that "current"
     * has special meaning in the RPC protocol that implies that a target is
     * both up-to-date and consistent with the rest of the watch stream.
     */
    e, 
    /**
     * The set of documents that were newly assigned to this target as part of
     * this remote event.
     */
    n, 
    /**
     * The set of documents that were already assigned to this target but received
     * an update during this remote event.
     */
    r, 
    /**
     * The set of documents that were removed from this target as part of this
     * remote event.
     */
    i) {
        this.resumeToken = t, this._n = e, this.fn = n, this.dn = r, this.wn = i
        /**
     * This method is used to create a synthesized TargetChanges that can be used to
     * apply a CURRENT status change to a View (for queries executed in a different
     * tab) or for new queries (to raise snapshots with correct CURRENT status).
     */;
    }
    return t.ln = function(e, n) {
        return new t(ot.lt, n, It(), It(), It());
    }, t;
}(), Pt = function(
/** The new document applies to all of these targets. */
t, 
/** The new document is removed from all of these targets. */
e, 
/** The key of the document for this change. */
n, 
/**
     * The new document or NoDocument if it was deleted. Is null if the
     * document went out of view without the server sending a new document.
     */
r) {
    this.En = t, this.removedTargetIds = e, this.key = n, this.mn = r;
}, Lt = function(t, e) {
    this.targetId = t, this.Tn = e;
}, Rt = function(
/** What kind of change occurred to the watch target. */
t, 
/** The target IDs that were added/removed/set. */
e, 
/**
     * An opaque, server-assigned token that allows watching a target to be
     * resumed after disconnecting without retransmitting all the data that
     * matches the target. The resume token essentially identifies a point in
     * time from which the server should resume sending results.
     */
n
/** An RPC error indicating why the watch failed. */ , r) {
    void 0 === n && (n = ot.lt), void 0 === r && (r = null), this.state = t, this.targetIds = e, 
    this.resumeToken = n, this.cause = r;
}, St = /** @class */ function() {
    function t() {
        /**
         * The number of pending responses (adds or removes) that we are waiting on.
         * We only consider targets active that have no pending responses.
         */
        this.An = 0, 
        /**
             * Keeps track of the document changes since the last raised snapshot.
             *
             * These changes are continuously updated as we receive document updates and
             * always reflect the current set of changes against the last issued snapshot.
             */
        this.In = jt(), 
        /** See public getters for explanations of these fields. */
        this.Rn = ot.lt, this.Pn = !1, 
        /**
             * Whether this target state should be included in the next snapshot. We
             * initialize to true so that newly-added targets are included in the next
             * RemoteEvent.
             */
        this.yn = !0;
    }
    return Object.defineProperty(t.prototype, "_n", {
        /**
         * Whether this target has been marked 'current'.
         *
         * 'Current' has special meaning in the RPC protocol: It implies that the
         * Watch backend has sent us all changes up to the point at which the target
         * was added and that the target is consistent with the rest of the watch
         * stream.
         */
        get: function() {
            return this.Pn;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "resumeToken", {
        /** The last resume token sent to us for this target. */ get: function() {
            return this.Rn;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "Vn", {
        /** Whether this target has pending target adds or target removes. */ get: function() {
            return 0 !== this.An;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "pn", {
        /** Whether we have modified any state that should trigger a snapshot. */ get: function() {
            return this.yn;
        },
        enumerable: !1,
        configurable: !0
    }), 
    /**
     * Applies the resume token to the TargetChange, but only when it has a new
     * value. Empty resumeTokens are discarded.
     */
    t.prototype.gn = function(t) {
        t.at() > 0 && (this.yn = !0, this.Rn = t);
    }, 
    /**
     * Creates a target change from the current set of changes.
     *
     * To reset the document changes after raising this snapshot, call
     * `clearPendingChanges()`.
     */
    t.prototype.vn = function() {
        var t = It(), e = It(), n = It();
        return this.In.forEach((function(r, i) {
            switch (i) {
              case 0 /* Added */ :
                t = t.add(r);
                break;

              case 2 /* Modified */ :
                e = e.add(r);
                break;

              case 1 /* Removed */ :
                n = n.add(r);
                break;

              default:
                O();
            }
        })), new Ot(this.Rn, this.Pn, t, e, n);
    }, 
    /**
     * Resets the document changes and sets `hasPendingChanges` to false.
     */
    t.prototype.bn = function() {
        this.yn = !1, this.In = jt();
    }, t.prototype.Cn = function(t, e) {
        this.yn = !0, this.In = this.In.Tt(t, e);
    }, t.prototype.Sn = function(t) {
        this.yn = !0, this.In = this.In.remove(t);
    }, t.prototype.Dn = function() {
        this.An += 1;
    }, t.prototype.Nn = function() {
        this.An -= 1;
    }, t.prototype.xn = function() {
        this.yn = !0, this.Pn = !0;
    }, t;
}(), Ut = /** @class */ function() {
    function t(t) {
        this.Fn = t, 
        /** The internal state of all tracked targets. */
        this.On = new Map, 
        /** Keeps track of the documents to update since the last raised snapshot. */
        this.Ln = mt(), 
        /** A mapping of document keys to their set of target IDs. */
        this.$n = qt(), 
        /**
             * A list of targets with existence filter mismatches. These targets are
             * known to be inconsistent and their listens needs to be re-established by
             * RemoteStore.
             */
        this.kn = new vt(G)
        /**
     * Processes and adds the DocumentWatchChange to the current set of changes.
     */;
    }
    return t.prototype.Mn = function(t) {
        for (var e = 0, n = t.En; e < n.length; e++) {
            var r = n[e];
            t.mn instanceof Nn ? this.Un(r, t.mn) : t.mn instanceof In && this.qn(r, t.key, t.mn);
        }
        for (var i = 0, o = t.removedTargetIds; i < o.length; i++) {
            var u = o[i];
            this.qn(u, t.key, t.mn);
        }
    }, 
    /** Processes and adds the WatchTargetChange to the current set of changes. */ t.prototype.Bn = function(t) {
        var e = this;
        this.Qn(t, (function(n) {
            var r = e.jn(n);
            switch (t.state) {
              case 0 /* NoChange */ :
                e.Wn(n) && r.gn(t.resumeToken);
                break;

              case 1 /* Added */ :
                // We need to decrement the number of pending acks needed from watch
                // for this targetId.
                r.Nn(), r.Vn || 
                // We have a freshly added target, so we need to reset any state
                // that we had previously. This can happen e.g. when remove and add
                // back a target for existence filter mismatches.
                r.bn(), r.gn(t.resumeToken);
                break;

              case 2 /* Removed */ :
                // We need to keep track of removed targets to we can post-filter and
                // remove any target changes.
                // We need to decrement the number of pending acks needed from watch
                // for this targetId.
                r.Nn(), r.Vn || e.removeTarget(n);
                break;

              case 3 /* Current */ :
                e.Wn(n) && (r.xn(), r.gn(t.resumeToken));
                break;

              case 4 /* Reset */ :
                e.Wn(n) && (
                // Reset the target and synthesizes removes for all existing
                // documents. The backend will re-add any documents that still
                // match the target before it sends the next global snapshot.
                e.Gn(n), r.gn(t.resumeToken));
                break;

              default:
                O();
            }
        }));
    }, 
    /**
     * Iterates over all targetIds that the watch change applies to: either the
     * targetIds explicitly listed in the change or the targetIds of all currently
     * active targets.
     */
    t.prototype.Qn = function(t, e) {
        var n = this;
        t.targetIds.length > 0 ? t.targetIds.forEach(e) : this.On.forEach((function(t, r) {
            n.Wn(r) && e(r);
        }));
    }, 
    /**
     * Handles existence filters and synthesizes deletes for filter mismatches.
     * Targets that are invalidated by filter mismatches are added to
     * `pendingTargetResets`.
     */
    t.prototype.Kn = function(t) {
        var e = t.targetId, n = t.Tn.count, r = this.zn(e);
        if (r) {
            var i = r.target;
            if (it(i)) if (0 === n) {
                // The existence filter told us the document does not exist. We deduce
                // that this document does not exist and apply a deleted document to
                // our updates. Without applying this deleted document there might be
                // another query that will raise this document as part of a snapshot
                // until it is resolved, essentially exposing inconsistency between
                // queries.
                var o = new J(i.path);
                this.qn(e, o, new In(o, Y.min()));
            } else P(1 === n); else this.Hn(e) !== n && (
            // Existence filter mismatch: We reset the mapping and raise a new
            // snapshot with `isFromCache:true`.
            this.Gn(e), this.kn = this.kn.add(e));
        }
    }, 
    /**
     * Converts the currently accumulated state into a remote event at the
     * provided snapshot version. Resets the accumulated changes before returning.
     */
    t.prototype.Yn = function(t) {
        var e = this, n = new Map;
        this.On.forEach((function(r, i) {
            var o = e.zn(i);
            if (o) {
                if (r._n && it(o.target)) {
                    // Document queries for document that don't exist can produce an empty
                    // result set. To update our local cache, we synthesize a document
                    // delete if we have not previously received the document. This
                    // resolves the limbo state of the document, removing it from
                    // limboDocumentRefs.
                    // TODO(dimond): Ideally we would have an explicit lookup target
                    // instead resulting in an explicit delete message and we could
                    // remove this special logic.
                    var u = new J(o.target.path);
                    null !== e.Ln.get(u) || e.Jn(i, u) || e.qn(i, u, new In(u, t));
                }
                r.pn && (n.set(i, r.vn()), r.bn());
            }
        }));
        var r = It();
        // We extract the set of limbo-only document updates as the GC logic
        // special-cases documents that do not appear in the target cache.
        // TODO(gsoltis): Expand on this comment once GC is available in the JS
        // client.
                this.$n.forEach((function(t, n) {
            var i = !0;
            n.Wt((function(t) {
                var n = e.zn(t);
                return !n || 2 /* LimboResolution */ === n._t || (i = !1, !1);
            })), i && (r = r.add(t));
        }));
        var i = new _t(t, n, this.kn, this.Ln, r);
        return this.Ln = mt(), this.$n = qt(), this.kn = new vt(G), i;
    }, 
    /**
     * Adds the provided document to the internal list of document updates and
     * its document key to the given target's mapping.
     */
    // Visible for testing.
    t.prototype.Un = function(t, e) {
        if (this.Wn(t)) {
            var n = this.Jn(t, e.key) ? 2 /* Modified */ : 0 /* Added */;
            this.jn(t).Cn(e.key, n), this.Ln = this.Ln.Tt(e.key, e), this.$n = this.$n.Tt(e.key, this.Xn(e.key).add(t));
        }
    }, 
    /**
     * Removes the provided document from the target mapping. If the
     * document no longer matches the target, but the document's state is still
     * known (e.g. we know that the document was deleted or we received the change
     * that caused the filter mismatch), the new document can be provided
     * to update the remote document cache.
     */
    // Visible for testing.
    t.prototype.qn = function(t, e, n) {
        if (this.Wn(t)) {
            var r = this.jn(t);
            this.Jn(t, e) ? r.Cn(e, 1 /* Removed */) : 
            // The document may have entered and left the target before we raised a
            // snapshot, so we can just ignore the change.
            r.Sn(e), this.$n = this.$n.Tt(e, this.Xn(e).delete(t)), n && (this.Ln = this.Ln.Tt(e, n));
        }
    }, t.prototype.removeTarget = function(t) {
        this.On.delete(t);
    }, 
    /**
     * Returns the current count of documents in the target. This includes both
     * the number of documents that the LocalStore considers to be part of the
     * target as well as any accumulated changes.
     */
    t.prototype.Hn = function(t) {
        var e = this.jn(t).vn();
        return this.Fn.Zn(t).size + e.fn.size - e.wn.size;
    }, 
    /**
     * Increment the number of acks needed from watch before we can consider the
     * server to be 'in-sync' with the client's active targets.
     */
    t.prototype.Dn = function(t) {
        this.jn(t).Dn();
    }, t.prototype.jn = function(t) {
        var e = this.On.get(t);
        return e || (e = new St, this.On.set(t, e)), e;
    }, t.prototype.Xn = function(t) {
        var e = this.$n.get(t);
        return e || (e = new vt(G), this.$n = this.$n.Tt(t, e)), e;
    }, 
    /**
     * Verifies that the user is still interested in this target (by calling
     * `getTargetDataForTarget()`) and that we are not waiting for pending ADDs
     * from watch.
     */
    t.prototype.Wn = function(t) {
        var e = null !== this.zn(t);
        return e || D("WatchChangeAggregator", "Detected inactive target", t), e;
    }, 
    /**
     * Returns the TargetData for an active target (i.e. a target that the user
     * is still interested in that has no outstanding target change requests).
     */
    t.prototype.zn = function(t) {
        var e = this.On.get(t);
        return e && e.Vn ? null : this.Fn.te(t);
    }, 
    /**
     * Resets the state of a Watch target to its initial state (e.g. sets
     * 'current' to false, clears the resume token and removes its target mapping
     * from all documents).
     */
    t.prototype.Gn = function(t) {
        var e = this;
        this.On.set(t, new St), this.Fn.Zn(t).forEach((function(n) {
            e.qn(t, n, /*updatedDocument=*/ null);
        }));
    }, 
    /**
     * Returns whether the LocalStore considers the document to be part of the
     * specified target.
     */
    t.prototype.Jn = function(t, e) {
        return this.Fn.Zn(t).has(e);
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * DocumentChangeSet keeps track of a set of changes to docs in a query, merging
 * duplicate events for the same doc.
 */ function qt() {
    return new lt(J.k);
}

function jt() {
    return new lt(J.k);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Mt(t) {
    var e = 0;
    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e++;
    return e;
}

function xt(t, e) {
    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n]);
}

function Ft(t) {
    for (var e in t) if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
    return !0;
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Represents a locally-applied ServerTimestamp.
 *
 * Server Timestamps are backed by MapValues that contain an internal field
 * `__type__` with a value of `server_timestamp`. The previous value and local
 * write time are stored in its `__previous_value__` and `__local_write_time__`
 * fields respectively.
 *
 * Notes:
 * - ServerTimestampValue instances are created as the result of applying a
 *   TransformMutation (see TransformMutation.applyTo()). They can only exist in
 *   the local view of a document. Therefore they do not need to be parsed or
 *   serialized.
 * - When evaluated locally (e.g. for snapshot.data()), they by default
 *   evaluate to `null`. This behavior can be configured by passing custom
 *   FieldValueOptions to value().
 * - With respect to other ServerTimestampValues, they sort by their
 *   localWriteTime.
 */ function zt(t) {
    var e, n;
    return "server_timestamp" === (null === (n = ((null === (e = null == t ? void 0 : t.mapValue) || void 0 === e ? void 0 : e.fields) || {}).__type__) || void 0 === n ? void 0 : n.stringValue);
}

/**
 * Creates a new ServerTimestamp proto value (using the internal format).
 */
/**
 * Returns the value of the field before this ServerTimestamp was set.
 *
 * Preserving the previous values allows the user to display the last resoled
 * value until the backend responds with the timestamp.
 */ function Gt(t) {
    var e = t.mapValue.fields.__previous_value__;
    return zt(e) ? Gt(e) : e;
}

/**
 * Returns the local time at which this timestamp was first set.
 */ function Bt(t) {
    var e = Zt(t.mapValue.fields.__local_write_time__.timestampValue);
    return new W(e.seconds, e.nanos);
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// A RegExp matching ISO 8601 UTC timestamps with optional fraction.
var Wt = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);

/** Extracts the backend's type order for the provided value. */ function Yt(t) {
    return "nullValue" in t ? 0 /* NullValue */ : "booleanValue" in t ? 1 /* BooleanValue */ : "integerValue" in t || "doubleValue" in t ? 2 /* NumberValue */ : "timestampValue" in t ? 3 /* TimestampValue */ : "stringValue" in t ? 5 /* StringValue */ : "bytesValue" in t ? 6 /* BlobValue */ : "referenceValue" in t ? 7 /* RefValue */ : "geoPointValue" in t ? 8 /* GeoPointValue */ : "arrayValue" in t ? 9 /* ArrayValue */ : "mapValue" in t ? zt(t) ? 4 /* ServerTimestampValue */ : 10 /* ObjectValue */ : O();
}

/** Tests `left` and `right` for equality based on the backend semantics. */ function Ht(t, e) {
    var n = Yt(t);
    if (n !== Yt(e)) return !1;
    switch (n) {
      case 0 /* NullValue */ :
        return !0;

      case 1 /* BooleanValue */ :
        return t.booleanValue === e.booleanValue;

      case 4 /* ServerTimestampValue */ :
        return Bt(t).isEqual(Bt(e));

      case 3 /* TimestampValue */ :
        return function(t, e) {
            if ("string" == typeof t.timestampValue && "string" == typeof e.timestampValue && t.timestampValue.length === e.timestampValue.length) 
            // Use string equality for ISO 8601 timestamps
            return t.timestampValue === e.timestampValue;
            var n = Zt(t.timestampValue), r = Zt(e.timestampValue);
            return n.seconds === r.seconds && n.nanos === r.nanos;
        }(t, e);

      case 5 /* StringValue */ :
        return t.stringValue === e.stringValue;

      case 6 /* BlobValue */ :
        return function(t, e) {
            return ee(t.bytesValue).isEqual(ee(e.bytesValue));
        }(t, e);

      case 7 /* RefValue */ :
        return t.referenceValue === e.referenceValue;

      case 8 /* GeoPointValue */ :
        return function(t, e) {
            return te(t.geoPointValue.latitude) === te(e.geoPointValue.latitude) && te(t.geoPointValue.longitude) === te(e.geoPointValue.longitude);
        }(t, e);

      case 2 /* NumberValue */ :
        return function(t, e) {
            if ("integerValue" in t && "integerValue" in e) return te(t.integerValue) === te(e.integerValue);
            if ("doubleValue" in t && "doubleValue" in e) {
                var n = te(t.doubleValue), r = te(e.doubleValue);
                return n === r ? Z(n) === Z(r) : isNaN(n) && isNaN(r);
            }
            return !1;
        }(t, e);

      case 9 /* ArrayValue */ :
        return B(t.arrayValue.values || [], e.arrayValue.values || [], Ht);

      case 10 /* ObjectValue */ :
        return function(t, e) {
            var n = t.mapValue.fields || {}, r = e.mapValue.fields || {};
            if (Mt(n) !== Mt(r)) return !1;
            for (var i in n) if (n.hasOwnProperty(i) && (void 0 === r[i] || !Ht(n[i], r[i]))) return !1;
            return !0;
        }(t, e);

      default:
        return O();
    }
}

function Qt(t, e) {
    return void 0 !== (t.values || []).find((function(t) {
        return Ht(t, e);
    }));
}

function Xt(t, e) {
    var n = Yt(t), r = Yt(e);
    if (n !== r) return G(n, r);
    switch (n) {
      case 0 /* NullValue */ :
        return 0;

      case 1 /* BooleanValue */ :
        return G(t.booleanValue, e.booleanValue);

      case 2 /* NumberValue */ :
        return function(t, e) {
            var n = te(t.integerValue || t.doubleValue), r = te(e.integerValue || e.doubleValue);
            return n < r ? -1 : n > r ? 1 : n === r ? 0 : 
            // one or both are NaN.
            isNaN(n) ? isNaN(r) ? 0 : -1 : 1;
        }(t, e);

      case 3 /* TimestampValue */ :
        return Kt(t.timestampValue, e.timestampValue);

      case 4 /* ServerTimestampValue */ :
        return Kt(Bt(t), Bt(e));

      case 5 /* StringValue */ :
        return G(t.stringValue, e.stringValue);

      case 6 /* BlobValue */ :
        return function(t, e) {
            var n = ee(t), r = ee(e);
            return n.F(r);
        }(t.bytesValue, e.bytesValue);

      case 7 /* RefValue */ :
        return function(t, e) {
            for (var n = t.split("/"), r = e.split("/"), i = 0; i < n.length && i < r.length; i++) {
                var o = G(n[i], r[i]);
                if (0 !== o) return o;
            }
            return G(n.length, r.length);
        }(t.referenceValue, e.referenceValue);

      case 8 /* GeoPointValue */ :
        return function(t, e) {
            var n = G(te(t.latitude), te(e.latitude));
            return 0 !== n ? n : G(te(t.longitude), te(e.longitude));
        }(t.geoPointValue, e.geoPointValue);

      case 9 /* ArrayValue */ :
        return function(t, e) {
            for (var n = t.values || [], r = e.values || [], i = 0; i < n.length && i < r.length; ++i) {
                var o = Xt(n[i], r[i]);
                if (o) return o;
            }
            return G(n.length, r.length);
        }(t.arrayValue, e.arrayValue);

      case 10 /* ObjectValue */ :
        return function(t, e) {
            var n = t.fields || {}, r = Object.keys(n), i = e.fields || {}, o = Object.keys(i);
            // Even though MapValues are likely sorted correctly based on their insertion
            // order (e.g. when received from the backend), local modifications can bring
            // elements out of order. We need to re-sort the elements to ensure that
            // canonical IDs are independent of insertion order.
                        r.sort(), o.sort();
            for (var u = 0; u < r.length && u < o.length; ++u) {
                var s = G(r[u], o[u]);
                if (0 !== s) return s;
                var a = Xt(n[r[u]], i[o[u]]);
                if (0 !== a) return a;
            }
            return G(r.length, o.length);
        }(t.mapValue, e.mapValue);

      default:
        throw O();
    }
}

function Kt(t, e) {
    if ("string" == typeof t && "string" == typeof e && t.length === e.length) return G(t, e);
    var n = Zt(t), r = Zt(e), i = G(n.seconds, r.seconds);
    return 0 !== i ? i : G(n.nanos, r.nanos);
}

function Jt(t) {
    return $t(t);
}

function $t(t) {
    return "nullValue" in t ? "null" : "booleanValue" in t ? "" + t.booleanValue : "integerValue" in t ? "" + t.integerValue : "doubleValue" in t ? "" + t.doubleValue : "timestampValue" in t ? function(t) {
        var e = Zt(t);
        return "time(" + e.seconds + "," + e.nanos + ")";
    }(t.timestampValue) : "stringValue" in t ? t.stringValue : "bytesValue" in t ? ee(t.bytesValue).toBase64() : "referenceValue" in t ? (n = t.referenceValue, 
    J.it(n).toString()) : "geoPointValue" in t ? "geo(" + (e = t.geoPointValue).latitude + "," + e.longitude + ")" : "arrayValue" in t ? function(t) {
        for (var e = "[", n = !0, r = 0, i = t.values || []; r < i.length; r++) {
            n ? n = !1 : e += ",", e += $t(i[r]);
        }
        return e + "]";
    }(t.arrayValue) : "mapValue" in t ? function(t) {
        for (
        // Iteration order in JavaScript is not guaranteed. To ensure that we generate
        // matching canonical IDs for identical maps, we need to sort the keys.
        var e = "{", n = !0, r = 0, i = Object.keys(t.fields || {}).sort(); r < i.length; r++) {
            var o = i[r];
            n ? n = !1 : e += ",", e += o + ":" + $t(t.fields[o]);
        }
        return e + "}";
    }(t.mapValue) : O();
    var e, n;
}

function Zt(t) {
    // The json interface (for the browser) will return an iso timestamp string,
    // while the proto js library (for node) will return a
    // google.protobuf.Timestamp instance.
    if (P(!!t), "string" == typeof t) {
        // The date string can have higher precision (nanos) than the Date class
        // (millis), so we do some custom parsing here.
        // Parse the nanos right out of the string.
        var e = 0, n = Wt.exec(t);
        if (P(!!n), n[1]) {
            // Pad the fraction out to 9 digits (nanos).
            var r = n[1];
            r = (r + "000000000").substr(0, 9), e = Number(r);
        }
        // Parse the date to get the seconds.
                var i = new Date(t);
        return {
            seconds: Math.floor(i.getTime() / 1e3),
            nanos: e
        };
    }
    return {
        seconds: te(t.seconds),
        nanos: te(t.nanos)
    };
}

/**
 * Converts the possible Proto types for numbers into a JavaScript number.
 * Returns 0 if the value is not numeric.
 */ function te(t) {
    // TODO(bjornick): Handle int64 greater than 53 bits.
    return "number" == typeof t ? t : "string" == typeof t ? Number(t) : 0;
}

/** Converts the possible Proto types for Blobs into a ByteString. */ function ee(t) {
    return "string" == typeof t ? ot.fromBase64String(t) : ot.fromUint8Array(t);
}

/** Returns a reference value for the provided database and key. */ function ne(t, e) {
    return {
        referenceValue: "projects/" + t.projectId + "/databases/" + t.database + "/documents/" + e.path.Y()
    };
}

/** Returns true if `value` is an IntegerValue . */ function re(t) {
    return !!t && "integerValue" in t;
}

/** Returns true if `value` is a DoubleValue. */
/** Returns true if `value` is an ArrayValue. */ function ie(t) {
    return !!t && "arrayValue" in t;
}

/** Returns true if `value` is a NullValue. */ function oe(t) {
    return !!t && "nullValue" in t;
}

/** Returns true if `value` is NaN. */ function ue(t) {
    return !!t && "doubleValue" in t && isNaN(Number(t.doubleValue));
}

/** Returns true if `value` is a MapValue. */ function se(t) {
    return !!t && "mapValue" in t;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var ae = {
    asc: "ASCENDING",
    desc: "DESCENDING"
}, ce = {
    "<": "LESS_THAN",
    "<=": "LESS_THAN_OR_EQUAL",
    ">": "GREATER_THAN",
    ">=": "GREATER_THAN_OR_EQUAL",
    "==": "EQUAL",
    "!=": "NOT_EQUAL",
    "array-contains": "ARRAY_CONTAINS",
    in: "IN",
    "not-in": "NOT_IN",
    "array-contains-any": "ARRAY_CONTAINS_ANY"
}, he = function(t, e) {
    this.t = t, this.ne = e;
};

/**
 * This class generates JsonObject values for the Datastore API suitable for
 * sending to either GRPC stub methods or via the JSON/HTTP REST API.
 *
 * The serializer supports both Protobuf.js and Proto3 JSON formats. By
 * setting `useProto3Json` to true, the serializer will use the Proto3 JSON
 * format.
 *
 * For a description of the Proto3 JSON format check
 * https://developers.google.com/protocol-buffers/docs/proto3#json
 *
 * TODO(klimt): We can remove the databaseId argument if we keep the full
 * resource name in documents.
 */
/**
 * Returns an IntegerValue for `value`.
 */
function fe(t) {
    return {
        integerValue: "" + t
    };
}

/**
 * Returns an DoubleValue for `value` that is encoded based the serializer's
 * `useProto3Json` setting.
 */ function le(t, e) {
    if (t.ne) {
        if (isNaN(e)) return {
            doubleValue: "NaN"
        };
        if (e === 1 / 0) return {
            doubleValue: "Infinity"
        };
        if (e === -1 / 0) return {
            doubleValue: "-Infinity"
        };
    }
    return {
        doubleValue: Z(e) ? "-0" : e
    };
}

/**
 * Returns a value for a number that's appropriate to put into a proto.
 * The return value is an IntegerValue if it can safely represent the value,
 * otherwise a DoubleValue is returned.
 */ function pe(t, e) {
    return function(t) {
        return "number" == typeof t && Number.isInteger(t) && !Z(t) && t <= Number.MAX_SAFE_INTEGER && t >= Number.MIN_SAFE_INTEGER;
    }(e) ? fe(e) : le(t, e);
}

/**
 * Returns a value for a Date that's appropriate to put into a proto.
 */ function de(t, e) {
    return t.ne ? new Date(1e3 * e.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "") + "." + ("000000000" + e.nanoseconds).slice(-9) + "Z" : {
        seconds: "" + e.seconds,
        nanos: e.nanoseconds
    };
}

/**
 * Returns a value for bytes that's appropriate to put in a proto.
 *
 * Visible for testing.
 */ function ve(t, e) {
    return t.ne ? e.toBase64() : e.toUint8Array();
}

/**
 * Returns a ByteString based on the proto string value.
 */ function ye(t, e) {
    return de(t, e.L());
}

function ge(t) {
    return P(!!t), Y.N(function(t) {
        var e = Zt(t);
        return new W(e.seconds, e.nanos);
    }(t));
}

function me(t, e) {
    return function(t) {
        return new Q([ "projects", t.projectId, "databases", t.database ]);
    }(t).child("documents").child(e).Y();
}

function we(t) {
    var e = Q.J(t);
    return P(xe(e)), e;
}

function be(t, e) {
    return me(t.t, e.path);
}

function Ee(t, e) {
    var n = we(e);
    if (n.get(1) !== t.t.projectId) throw new S(R.INVALID_ARGUMENT, "Tried to deserialize key from different project: " + n.get(1) + " vs " + t.t.projectId);
    if (n.get(3) !== t.t.database) throw new S(R.INVALID_ARGUMENT, "Tried to deserialize key from different database: " + n.get(3) + " vs " + t.t.database);
    return new J(Ie(n));
}

function Te(t, e) {
    return me(t.t, e);
}

function Ne(t) {
    return new Q([ "projects", t.t.projectId, "databases", t.t.database ]).Y();
}

function Ie(t) {
    return P(t.length > 4 && "documents" === t.get(4)), t.U(5)
    /** Creates a Document proto from key and fields (but no create/update time) */;
}

function Ae(t, e, n) {
    return {
        name: be(t, e),
        fields: n.proto.mapValue.fields
    };
}

function Ce(t, e) {
    var n;
    if (e instanceof fn) n = {
        update: Ae(t, e.key, e.value)
    }; else if (e instanceof gn) n = {
        delete: be(t, e.key)
    }; else if (e instanceof ln) n = {
        update: Ae(t, e.key, e.data),
        updateMask: Me(e.ee)
    }; else if (e instanceof dn) n = {
        transform: {
            document: be(t, e.key),
            fieldTransforms: e.fieldTransforms.map((function(t) {
                return function(t, e) {
                    var n = e.transform;
                    if (n instanceof We) return {
                        fieldPath: e.field.Y(),
                        setToServerValue: "REQUEST_TIME"
                    };
                    if (n instanceof Ye) return {
                        fieldPath: e.field.Y(),
                        appendMissingElements: {
                            values: n.elements
                        }
                    };
                    if (n instanceof Qe) return {
                        fieldPath: e.field.Y(),
                        removeAllFromArray: {
                            values: n.elements
                        }
                    };
                    if (n instanceof Ke) return {
                        fieldPath: e.field.Y(),
                        increment: n.se
                    };
                    throw O();
                }(0, t);
            }))
        }
    }; else {
        if (!(e instanceof mn)) return O();
        n = {
            verify: be(t, e.key)
        };
    }
    return e.re.ie || (n.currentDocument = function(t, e) {
        return void 0 !== e.updateTime ? {
            updateTime: ye(t, e.updateTime)
        } : void 0 !== e.exists ? {
            exists: e.exists
        } : O();
    }(t, e.re)), n;
}

function De(t, e) {
    return {
        documents: [ Te(t, e.path) ]
    };
}

function ke(t, e) {
    // Dissect the path into parent, collectionId, and optional key filter.
    var n = {
        structuredQuery: {}
    }, r = e.path;
    null !== e.collectionGroup ? (n.parent = Te(t, r), n.structuredQuery.from = [ {
        collectionId: e.collectionGroup,
        allDescendants: !0
    } ]) : (n.parent = Te(t, r.q()), n.structuredQuery.from = [ {
        collectionId: r.j()
    } ]);
    var i = function(t) {
        if (0 !== t.length) {
            var e = t.map((function(t) {
                // visible for testing
                return function(t) {
                    if ("==" /* EQUAL */ === t.op) {
                        if (ue(t.value)) return {
                            unaryFilter: {
                                field: Se(t.field),
                                op: "IS_NAN"
                            }
                        };
                        if (oe(t.value)) return {
                            unaryFilter: {
                                field: Se(t.field),
                                op: "IS_NULL"
                            }
                        };
                    } else if ("!=" /* NOT_EQUAL */ === t.op) {
                        if (ue(t.value)) return {
                            unaryFilter: {
                                field: Se(t.field),
                                op: "IS_NOT_NAN"
                            }
                        };
                        if (oe(t.value)) return {
                            unaryFilter: {
                                field: Se(t.field),
                                op: "IS_NOT_NULL"
                            }
                        };
                    }
                    return {
                        fieldFilter: {
                            field: Se(t.field),
                            op: Re(t.op),
                            value: t.value
                        }
                    };
                }(t);
            }));
            return 1 === e.length ? e[0] : {
                compositeFilter: {
                    op: "AND",
                    filters: e
                }
            };
        }
    }(e.filters);
    i && (n.structuredQuery.where = i);
    var o = function(t) {
        if (0 !== t.length) return t.map((function(t) {
            // visible for testing
            return function(t) {
                return {
                    field: Se(t.field),
                    direction: Le(t.dir)
                };
            }(t);
        }));
    }(e.orderBy);
    o && (n.structuredQuery.orderBy = o);
    var u = function(t, e) {
        return t.ne || $(e) ? e : {
            value: e
        };
    }(t, e.limit);
    return null !== u && (n.structuredQuery.limit = u), e.startAt && (n.structuredQuery.startAt = Oe(e.startAt)), 
    e.endAt && (n.structuredQuery.endAt = Oe(e.endAt)), n;
}

function Ve(t) {
    var e = function(t) {
        var e = we(t);
        // In v1beta1 queries for collections at the root did not have a trailing
        // "/documents". In v1 all resource paths contain "/documents". Preserve the
        // ability to read the v1beta1 form for compatibility with queries persisted
        // in the local target cache.
                return 4 === e.length ? Q.X() : Ie(e);
    }(t.parent), n = t.structuredQuery, r = n.from ? n.from.length : 0, i = null;
    if (r > 0) {
        P(1 === r);
        var o = n.from[0];
        o.allDescendants ? i = o.collectionId : e = e.child(o.collectionId);
    }
    var u = [];
    n.where && (u = _e(n.where));
    var s = [];
    n.orderBy && (s = n.orderBy.map((function(t) {
        return function(t) {
            return new tr(Ue(t.field), 
            // visible for testing
            function(t) {
                switch (t) {
                  case "ASCENDING":
                    return "asc" /* ASCENDING */;

                  case "DESCENDING":
                    return "desc" /* DESCENDING */;

                  default:
                    return;
                }
            }(t.direction));
        }(t);
    })));
    var a = null;
    n.limit && (a = function(t) {
        var e;
        return $(e = "object" == typeof t ? t.value : t) ? null : e;
    }(n.limit));
    var c = null;
    n.startAt && (c = Pe(n.startAt));
    var h = null;
    return n.endAt && (h = Pe(n.endAt)), 
    /** Creates a new Query instance with the options provided. */
    function(t, e, n, r, i, o, u, s) {
        return new Cn(t, e, n, r, i, "F" /* First */ , u, s);
    }(e, i, s, u, a, 0, c, h);
}

function _e(t) {
    return t ? void 0 !== t.unaryFilter ? [ je(t) ] : void 0 !== t.fieldFilter ? [ qe(t) ] : void 0 !== t.compositeFilter ? t.compositeFilter.filters.map((function(t) {
        return _e(t);
    })).reduce((function(t, e) {
        return t.concat(e);
    })) : O() : [];
}

function Oe(t) {
    return {
        before: t.before,
        values: t.position
    };
}

function Pe(t) {
    var e = !!t.before, n = t.values || [];
    return new Kn(n, e);
}

// visible for testing
function Le(t) {
    return ae[t];
}

function Re(t) {
    return ce[t];
}

function Se(t) {
    return {
        fieldPath: t.Y()
    };
}

function Ue(t) {
    return K.et(t.fieldPath);
}

function qe(t) {
    return Fn.create(Ue(t.fieldFilter.field), function(t) {
        switch (t) {
          case "EQUAL":
            return "==" /* EQUAL */;

          case "NOT_EQUAL":
            return "!=" /* NOT_EQUAL */;

          case "GREATER_THAN":
            return ">" /* GREATER_THAN */;

          case "GREATER_THAN_OR_EQUAL":
            return ">=" /* GREATER_THAN_OR_EQUAL */;

          case "LESS_THAN":
            return "<" /* LESS_THAN */;

          case "LESS_THAN_OR_EQUAL":
            return "<=" /* LESS_THAN_OR_EQUAL */;

          case "ARRAY_CONTAINS":
            return "array-contains" /* ARRAY_CONTAINS */;

          case "IN":
            return "in" /* IN */;

          case "NOT_IN":
            return "not-in" /* NOT_IN */;

          case "ARRAY_CONTAINS_ANY":
            return "array-contains-any" /* ARRAY_CONTAINS_ANY */;

          case "OPERATOR_UNSPECIFIED":
          default:
            return O();
        }
    }(t.fieldFilter.op), t.fieldFilter.value);
}

function je(t) {
    switch (t.unaryFilter.op) {
      case "IS_NAN":
        var e = Ue(t.unaryFilter.field);
        return Fn.create(e, "==" /* EQUAL */ , {
            doubleValue: NaN
        });

      case "IS_NULL":
        var n = Ue(t.unaryFilter.field);
        return Fn.create(n, "==" /* EQUAL */ , {
            nullValue: "NULL_VALUE"
        });

      case "IS_NOT_NAN":
        var r = Ue(t.unaryFilter.field);
        return Fn.create(r, "!=" /* NOT_EQUAL */ , {
            doubleValue: NaN
        });

      case "IS_NOT_NULL":
        var i = Ue(t.unaryFilter.field);
        return Fn.create(i, "!=" /* NOT_EQUAL */ , {
            nullValue: "NULL_VALUE"
        });

      case "OPERATOR_UNSPECIFIED":
      default:
        return O();
    }
}

function Me(t) {
    var e = [];
    return t.fields.forEach((function(t) {
        return e.push(t.Y());
    })), {
        fieldPaths: e
    };
}

function xe(t) {
    // Resource names have at least 4 components (project ID, database ID)
    return t.length >= 4 && "projects" === t.get(0) && "databases" === t.get(2);
}

/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Represents a transform within a TransformMutation. */ var Fe = function() {
    // Make sure that the structural type of `TransformOperation` is unique.
    // See https://github.com/microsoft/TypeScript/issues/5451
    this.oe = void 0;
};

/**
 * Computes the local transform result against the provided `previousValue`,
 * optionally using the provided localWriteTime.
 */ function ze(t, e, n) {
    return t instanceof We ? function(t, e) {
        var n = {
            fields: {
                __type__: {
                    stringValue: "server_timestamp"
                },
                __local_write_time__: {
                    timestampValue: {
                        seconds: t.seconds,
                        nanos: t.nanoseconds
                    }
                }
            }
        };
        return e && (n.fields.__previous_value__ = e), {
            mapValue: n
        };
    }(n, e) : t instanceof Ye ? He(t, e) : t instanceof Qe ? Xe(t, e) : function(t, e) {
        // PORTING NOTE: Since JavaScript's integer arithmetic is limited to 53 bit
        // precision and resolves overflows by reducing precision, we do not
        // manually cap overflows at 2^63.
        var n = Be(t, e), r = Je(n) + Je(t.se);
        return re(n) && re(t.se) ? fe(r) : le(t.serializer, r);
    }(t, e);
}

/**
 * Computes a final transform result after the transform has been acknowledged
 * by the server, potentially using the server-provided transformResult.
 */ function Ge(t, e, n) {
    // The server just sends null as the transform result for array operations,
    // so we have to calculate a result the same as we do for local
    // applications.
    return t instanceof Ye ? He(t, e) : t instanceof Qe ? Xe(t, e) : n;
}

/**
 * If this transform operation is not idempotent, returns the base value to
 * persist for this transform. If a base value is returned, the transform
 * operation is always applied to this base value, even if document has
 * already been updated.
 *
 * Base values provide consistent behavior for non-idempotent transforms and
 * allow us to return the same latency-compensated value even if the backend
 * has already applied the transform operation. The base value is null for
 * idempotent transforms, as they can be re-played even if the backend has
 * already applied them.
 *
 * @returns a base value to store along with the mutation, or null for
 * idempotent transforms.
 */ function Be(t, e) {
    return t instanceof Ke ? re(n = e) || function(t) {
        return !!t && "doubleValue" in t;
    }(n) ? e : {
        integerValue: 0
    } : null;
    var n;
}

/** Transforms a value into a server-generated timestamp. */ var We = /** @class */ function(e) {
    function n() {
        return null !== e && e.apply(this, arguments) || this;
    }
    return t(n, e), n;
}(Fe), Ye = /** @class */ function(e) {
    function n(t) {
        var n = this;
        return (n = e.call(this) || this).elements = t, n;
    }
    return t(n, e), n;
}(Fe);

/** Transforms an array value via a union operation. */ function He(t, e) {
    for (var n = $e(e), r = function(t) {
        n.some((function(e) {
            return Ht(e, t);
        })) || n.push(t);
    }, i = 0, o = t.elements; i < o.length; i++) {
        r(o[i]);
    }
    return {
        arrayValue: {
            values: n
        }
    };
}

/** Transforms an array value via a remove operation. */ var Qe = /** @class */ function(e) {
    function n(t) {
        var n = this;
        return (n = e.call(this) || this).elements = t, n;
    }
    return t(n, e), n;
}(Fe);

function Xe(t, e) {
    for (var n = $e(e), r = function(t) {
        n = n.filter((function(e) {
            return !Ht(e, t);
        }));
    }, i = 0, o = t.elements; i < o.length; i++) {
        r(o[i]);
    }
    return {
        arrayValue: {
            values: n
        }
    };
}

/**
 * Implements the backend semantics for locally computed NUMERIC_ADD (increment)
 * transforms. Converts all field values to integers or doubles, but unlike the
 * backend does not cap integer values at 2^63. Instead, JavaScript number
 * arithmetic is used and precision loss can occur for values greater than 2^53.
 */ var Ke = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this) || this).serializer = t, r.se = n, r;
    }
    return t(n, e), n;
}(Fe);

function Je(t) {
    return te(t.integerValue || t.doubleValue);
}

function $e(t) {
    return ie(t) && t.arrayValue.values ? t.arrayValue.values.slice() : [];
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provides a set of fields that can be used to partially patch a document.
 * FieldMask is used in conjunction with ObjectValue.
 * Examples:
 *   foo - Overwrites foo entirely with the provided value. If foo is not
 *         present in the companion ObjectValue, the field is deleted.
 *   foo.bar - Overwrites only the field bar of the object foo.
 *             If foo is not an object, foo is replaced with an object
 *             containing foo
 */ var Ze = /** @class */ function() {
    function t(t) {
        this.fields = t, 
        // TODO(dimond): validation of FieldMask
        // Sort the field mask to support `FieldMask.isEqual()` and assert below.
        t.sort(K.k)
        /**
     * Verifies that `fieldPath` is included by at least one field in this field
     * mask.
     *
     * This is an O(n) operation, where `n` is the size of the field mask.
     */;
    }
    return t.prototype.ue = function(t) {
        for (var e = 0, n = this.fields; e < n.length; e++) {
            if (n[e].G(t)) return !0;
        }
        return !1;
    }, t.prototype.isEqual = function(t) {
        return B(this.fields, t.fields, (function(t, e) {
            return t.isEqual(e);
        }));
    }, t;
}(), tn = function(t, e) {
    this.field = t, this.transform = e;
};

/** A field path and the TransformOperation to perform upon it. */
/** The result of successfully applying a mutation to the backend. */ var en = function(
/**
     * The version at which the mutation was committed:
     *
     * - For most operations, this is the updateTime in the WriteResult.
     * - For deletes, the commitTime of the WriteResponse (because deletes are
     *   not stored and have no updateTime).
     *
     * Note that these versions can be different: No-op writes will not change
     * the updateTime even though the commitTime advances.
     */
t, 
/**
     * The resulting fields returned from the backend after a
     * TransformMutation has been committed. Contains one FieldValue for each
     * FieldTransform that was in the mutation.
     *
     * Will be null if the mutation was not a TransformMutation.
     */
e) {
    this.version = t, this.transformResults = e;
}, nn = /** @class */ function() {
    function t(t, e) {
        this.updateTime = t, this.exists = e
        /** Creates a new empty Precondition. */;
    }
    return t.ce = function() {
        return new t;
    }, 
    /** Creates a new Precondition with an exists flag. */ t.exists = function(e) {
        return new t(void 0, e);
    }, 
    /** Creates a new Precondition based on a version a document exists at. */ t.updateTime = function(e) {
        return new t(e);
    }, Object.defineProperty(t.prototype, "ie", {
        /** Returns whether this Precondition is empty. */ get: function() {
            return void 0 === this.updateTime && void 0 === this.exists;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.isEqual = function(t) {
        return this.exists === t.exists && (this.updateTime ? !!t.updateTime && this.updateTime.isEqual(t.updateTime) : !t.updateTime);
    }, t;
}();

/**
 * Encodes a precondition for a mutation. This follows the model that the
 * backend accepts with the special case of an explicit "empty" precondition
 * (meaning no precondition).
 */
/**
 * Returns true if the preconditions is valid for the given document
 * (or null if no document is available).
 */
function rn(t, e) {
    return void 0 !== t.updateTime ? e instanceof Nn && e.version.isEqual(t.updateTime) : void 0 === t.exists || t.exists === e instanceof Nn;
}

/**
 * A mutation describes a self-contained change to a document. Mutations can
 * create, replace, delete, and update subsets of documents.
 *
 * Mutations not only act on the value of the document but also its version.
 *
 * For local mutations (mutations that haven't been committed yet), we preserve
 * the existing version for Set, Patch, and Transform mutations. For Delete
 * mutations, we reset the version to 0.
 *
 * Here's the expected transition table.
 *
 * MUTATION           APPLIED TO            RESULTS IN
 *
 * SetMutation        Document(v3)          Document(v3)
 * SetMutation        NoDocument(v3)        Document(v0)
 * SetMutation        null                  Document(v0)
 * PatchMutation      Document(v3)          Document(v3)
 * PatchMutation      NoDocument(v3)        NoDocument(v3)
 * PatchMutation      null                  null
 * TransformMutation  Document(v3)          Document(v3)
 * TransformMutation  NoDocument(v3)        NoDocument(v3)
 * TransformMutation  null                  null
 * DeleteMutation     Document(v3)          NoDocument(v0)
 * DeleteMutation     NoDocument(v3)        NoDocument(v0)
 * DeleteMutation     null                  NoDocument(v0)
 *
 * For acknowledged mutations, we use the updateTime of the WriteResponse as
 * the resulting version for Set, Patch, and Transform mutations. As deletes
 * have no explicit update time, we use the commitTime of the WriteResponse for
 * Delete mutations.
 *
 * If a mutation is acknowledged by the backend but fails the precondition check
 * locally, we return an `UnknownDocument` and rely on Watch to send us the
 * updated version.
 *
 * Note that TransformMutations don't create Documents (in the case of being
 * applied to a NoDocument), even though they would on the backend. This is
 * because the client always combines the TransformMutation with a SetMutation
 * or PatchMutation and we only want to apply the transform if the prior
 * mutation resulted in a Document (always true for a SetMutation, but not
 * necessarily for a PatchMutation).
 *
 * ## Subclassing Notes
 *
 * Subclasses of Mutation need to implement applyToRemoteDocument() and
 * applyToLocalView() to implement the actual behavior of applying the mutation
 * to some source document.
 */ var on = function() {};

/**
 * Applies this mutation to the given MaybeDocument or null for the purposes
 * of computing a new remote document. If the input document doesn't match the
 * expected state (e.g. it is null or outdated), an `UnknownDocument` can be
 * returned.
 *
 * @param mutation - The mutation to apply.
 * @param maybeDoc - The document to mutate. The input document can be null if
 *     the client has no knowledge of the pre-mutation state of the document.
 * @param mutationResult - The result of applying the mutation from the backend.
 * @returns The mutated document. The returned document may be an
 *     UnknownDocument if the mutation could not be applied to the locally
 *     cached base document.
 */ function un(t, e, n) {
    return t instanceof fn ? function(t, e, n) {
        // Unlike applySetMutationToLocalView, if we're applying a mutation to a
        // remote document the server has accepted the mutation so the precondition
        // must have held.
        return new Nn(t.key, n.version, t.value, {
            hasCommittedMutations: !0
        });
    }(t, 0, n) : t instanceof ln ? function(t, e, n) {
        if (!rn(t.re, e)) 
        // Since the mutation was not rejected, we know that the  precondition
        // matched on the backend. We therefore must not have the expected version
        // of the document in our cache and return an UnknownDocument with the
        // known updateTime.
        return new An(t.key, n.version);
        var r = pn(t, e);
        return new Nn(t.key, n.version, r, {
            hasCommittedMutations: !0
        });
    }(t, e, n) : t instanceof dn ? function(t, e, n) {
        if (P(null != n.transformResults), !rn(t.re, e)) 
        // Since the mutation was not rejected, we know that the  precondition
        // matched on the backend. We therefore must not have the expected version
        // of the document in our cache and return an UnknownDocument with the
        // known updateTime.
        return new An(t.key, n.version);
        var r = vn(t, e), i = 
        /**
 * Creates a list of "transform results" (a transform result is a field value
 * representing the result of applying a transform) for use after a
 * TransformMutation has been acknowledged by the server.
 *
 * @param fieldTransforms - The field transforms to apply the result to.
 * @param baseDoc - The document prior to applying this mutation batch.
 * @param serverTransformResults - The transform results received by the server.
 * @returns The transform results list.
 */
        function(t, e, n) {
            var r = [];
            P(t.length === n.length);
            for (var i = 0; i < n.length; i++) {
                var o = t[i], u = o.transform, s = null;
                e instanceof Nn && (s = e.field(o.field)), r.push(Ge(u, s, n[i]));
            }
            return r;
        }(t.fieldTransforms, e, n.transformResults), o = n.version, u = yn(t, r.data(), i);
        return new Nn(t.key, o, u, {
            hasCommittedMutations: !0
        });
    }(t, e, n) : function(t, e, n) {
        // Unlike applyToLocalView, if we're applying a mutation to a remote
        // document the server has accepted the mutation so the precondition must
        // have held.
        return new In(t.key, n.version, {
            hasCommittedMutations: !0
        });
    }(t, 0, n);
}

/**
 * Applies this mutation to the given MaybeDocument or null for the purposes
 * of computing the new local view of a document. Both the input and returned
 * documents can be null.
 *
 * @param mutation - The mutation to apply.
 * @param maybeDoc - The document to mutate. The input document can be null if
 *     the client has no knowledge of the pre-mutation state of the document.
 * @param baseDoc - The state of the document prior to this mutation batch. The
 *     input document can be null if the client has no knowledge of the
 *     pre-mutation state of the document.
 * @param localWriteTime - A timestamp indicating the local write time of the
 *     batch this mutation is a part of.
 * @returns The mutated document. The returned document may be null, but only
 *     if maybeDoc was null and the mutation would not create a new document.
 */ function sn(t, e, n, r) {
    return t instanceof fn ? function(t, e) {
        if (!rn(t.re, e)) return e;
        var n = hn(e);
        return new Nn(t.key, n, t.value, {
            he: !0
        });
    }(t, e) : t instanceof ln ? function(t, e) {
        if (!rn(t.re, e)) return e;
        var n = hn(e), r = pn(t, e);
        return new Nn(t.key, n, r, {
            he: !0
        });
    }(t, e) : t instanceof dn ? function(t, e, n, r) {
        if (!rn(t.re, e)) return e;
        var i = vn(t, e), o = function(t, e, n, r) {
            for (var i = [], o = 0, u = t; o < u.length; o++) {
                var s = u[o], a = s.transform, c = null;
                n instanceof Nn && (c = n.field(s.field)), null === c && r instanceof Nn && (
                // If the current document does not contain a value for the mutated
                // field, use the value that existed before applying this mutation
                // batch. This solves an edge case where a PatchMutation clears the
                // values in a nested map before the TransformMutation is applied.
                c = r.field(s.field)), i.push(ze(a, c, e));
            }
            return i;
        }(t.fieldTransforms, n, e, r), u = yn(t, i.data(), o);
        return new Nn(t.key, i.version, u, {
            he: !0
        });
    }(t, e, r, n) : function(t, e) {
        return rn(t.re, e) ? new In(t.key, Y.min()) : e;
    }(t, e);
}

/**
 * If this mutation is not idempotent, returns the base value to persist with
 * this mutation. If a base value is returned, the mutation is always applied
 * to this base value, even if document has already been updated.
 *
 * The base value is a sparse object that consists of only the document
 * fields for which this mutation contains a non-idempotent transformation
 * (e.g. a numeric increment). The provided value guarantees consistent
 * behavior for non-idempotent transforms and allow us to return the same
 * latency-compensated value even if the backend has already applied the
 * mutation. The base value is null for idempotent mutations, as they can be
 * re-played even if the backend has already applied them.
 *
 * @returns a base value to store along with the mutation, or null for
 * idempotent mutations.
 */ function an(t, e) {
    return t instanceof dn ? function(t, e) {
        for (var n = null, r = 0, i = t.fieldTransforms; r < i.length; r++) {
            var o = i[r], u = e instanceof Nn ? e.field(o.field) : void 0, s = Be(o.transform, u || null);
            null != s && (n = null == n ? (new bn).set(o.field, s) : n.set(o.field, s));
        }
        return n ? n.ae() : null;
    }(t, e) : null;
}

function cn(t, e) {
    return t.type === e.type && !!t.key.isEqual(e.key) && !!t.re.isEqual(e.re) && (0 /* Set */ === t.type ? t.value.isEqual(e.value) : 1 /* Patch */ === t.type ? t.data.isEqual(e.data) && t.ee.isEqual(e.ee) : 2 /* Transform */ !== t.type || B(t.fieldTransforms, t.fieldTransforms, (function(t, e) {
        return function(t, e) {
            return t.field.isEqual(e.field) && function(t, e) {
                return t instanceof Ye && e instanceof Ye || t instanceof Qe && e instanceof Qe ? B(t.elements, e.elements, Ht) : t instanceof Ke && e instanceof Ke ? Ht(t.se, e.se) : t instanceof We && e instanceof We;
            }(t.transform, e.transform);
        }(t, e);
    })));
}

/**
 * Returns the version from the given document for use as the result of a
 * mutation. Mutations are defined to return the version of the base document
 * only if it is an existing document. Deleted and unknown documents have a
 * post-mutation version of SnapshotVersion.min().
 */ function hn(t) {
    return t instanceof Nn ? t.version : Y.min();
}

/**
 * A mutation that creates or replaces the document at the given key with the
 * object value contents.
 */ var fn = /** @class */ function(e) {
    function n(t, n, r) {
        var i = this;
        return (i = e.call(this) || this).key = t, i.value = n, i.re = r, i.type = 0 /* Set */ , 
        i;
    }
    return t(n, e), n;
}(on), ln = /** @class */ function(e) {
    function n(t, n, r, i) {
        var o = this;
        return (o = e.call(this) || this).key = t, o.data = n, o.ee = r, o.re = i, o.type = 1 /* Patch */ , 
        o;
    }
    return t(n, e), n;
}(on);

function pn(t, e) {
    return function(t, e) {
        var n = new bn(e);
        return t.ee.fields.forEach((function(e) {
            if (!e.W()) {
                var r = t.data.field(e);
                null !== r ? n.set(e, r) : n.delete(e);
            }
        })), n.ae();
    }(t, e instanceof Nn ? e.data() : wn.empty());
}

var dn = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this) || this).key = t, r.fieldTransforms = n, r.type = 2 /* Transform */ , 
        // NOTE: We set a precondition of exists: true as a safety-check, since we
        // always combine TransformMutations with a SetMutation or PatchMutation which
        // (if successful) should end up with an existing document.
        r.re = nn.exists(!0), r;
    }
    return t(n, e), n;
}(on);

function vn(t, e) {
    return e;
}

function yn(t, e, n) {
    for (var r = new bn(e), i = 0; i < t.fieldTransforms.length; i++) {
        var o = t.fieldTransforms[i];
        r.set(o.field, n[i]);
    }
    return r.ae();
}

/** A mutation that deletes the document at the given key. */ var gn = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this) || this).key = t, r.re = n, r.type = 3 /* Delete */ , r;
    }
    return t(n, e), n;
}(on), mn = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this) || this).key = t, r.re = n, r.type = 4 /* Verify */ , r;
    }
    return t(n, e), n;
}(on), wn = /** @class */ function() {
    function t(t) {
        this.proto = t;
    }
    return t.empty = function() {
        return new t({
            mapValue: {}
        });
    }, 
    /**
     * Returns the value at the given path or null.
     *
     * @param path - the path to search
     * @returns The value at the path or if there it doesn't exist.
     */
    t.prototype.field = function(t) {
        if (t.W()) return this.proto;
        for (var e = this.proto, n = 0; n < t.length - 1; ++n) {
            if (!e.mapValue.fields) return null;
            if (!se(e = e.mapValue.fields[t.get(n)])) return null;
        }
        return (e = (e.mapValue.fields || {})[t.j()]) || null;
    }, t.prototype.isEqual = function(t) {
        return Ht(this.proto, t.proto);
    }, t;
}(), bn = /** @class */ function() {
    /**
     * @param baseObject - The object to mutate.
     */
    function t(t) {
        void 0 === t && (t = wn.empty()), this.le = t, 
        /** A map that contains the accumulated changes in this builder. */
        this._e = new Map;
    }
    /**
     * Sets the field to the provided value.
     *
     * @param path - The field path to set.
     * @param value - The value to set.
     * @returns The current Builder instance.
     */    return t.prototype.set = function(t, e) {
        return this.fe(t, e), this;
    }, 
    /**
     * Removes the field at the specified path. If there is no field at the
     * specified path, nothing is changed.
     *
     * @param path - The field path to remove.
     * @returns The current Builder instance.
     */
    t.prototype.delete = function(t) {
        return this.fe(t, null), this;
    }, 
    /**
     * Adds `value` to the overlay map at `path`. Creates nested map entries if
     * needed.
     */
    t.prototype.fe = function(t, e) {
        for (var n = this._e, r = 0; r < t.length - 1; ++r) {
            var i = t.get(r), o = n.get(i);
            o instanceof Map ? 
            // Re-use a previously created map
            n = o : o && 10 /* ObjectValue */ === Yt(o) ? (
            // Convert the existing Protobuf MapValue into a map
            o = new Map(Object.entries(o.mapValue.fields || {})), n.set(i, o), n = o) : (
            // Create an empty map to represent the current nesting level
            o = new Map, n.set(i, o), n = o);
        }
        n.set(t.j(), e);
    }, 
    /** Returns an ObjectValue with all mutations applied. */ t.prototype.ae = function() {
        var t = this.de(K.X(), this._e);
        return null != t ? new wn(t) : this.le;
    }, 
    /**
     * Applies any overlays from `currentOverlays` that exist at `currentPath`
     * and returns the merged data at `currentPath` (or null if there were no
     * changes).
     *
     * @param currentPath - The path at the current nesting level. Can be set to
     * FieldValue.emptyPath() to represent the root.
     * @param currentOverlays - The overlays at the current nesting level in the
     * same format as `overlayMap`.
     * @returns The merged data at `currentPath` or null if no modifications
     * were applied.
     */
    t.prototype.de = function(t, e) {
        var n = this, r = !1, i = this.le.field(t), o = se(i) ? // If there is already data at the current path, base our
        Object.assign({}, i.mapValue.fields) : {};
        return e.forEach((function(e, i) {
            if (e instanceof Map) {
                var u = n.de(t.child(i), e);
                null != u && (o[i] = u, r = !0);
            } else null !== e ? (o[i] = e, r = !0) : o.hasOwnProperty(i) && (delete o[i], r = !0);
        })), r ? {
            mapValue: {
                fields: o
            }
        } : null;
    }, t;
}();

/**
 * Returns a FieldMask built from all fields in a MapValue.
 */
function En(t) {
    var e = [];
    return xt(t.fields || {}, (function(t, n) {
        var r = new K([ t ]);
        if (se(n)) {
            var i = En(n.mapValue).fields;
            if (0 === i.length) 
            // Preserve the empty map by adding it to the FieldMask.
            e.push(r); else 
            // For nested and non-empty ObjectValues, add the FieldPath of the
            // leaf nodes.
            for (var o = 0, u = i; o < u.length; o++) {
                var s = u[o];
                e.push(r.child(s));
            }
        } else 
        // For nested and non-empty ObjectValues, add the FieldPath of the leaf
        // nodes.
        e.push(r);
    })), new Ze(e)
    /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
    /**
 * The result of a lookup for a given path may be an existing document or a
 * marker that this document does not exist at a given version.
 */;
}

var Tn = function(t, e) {
    this.key = t, this.version = e;
}, Nn = /** @class */ function(e) {
    function n(t, n, r, i) {
        var o = this;
        return (o = e.call(this, t, n) || this).we = r, o.he = !!i.he, o.hasCommittedMutations = !!i.hasCommittedMutations, 
        o;
    }
    return t(n, e), n.prototype.field = function(t) {
        return this.we.field(t);
    }, n.prototype.data = function() {
        return this.we;
    }, n.prototype.Ee = function() {
        return this.we.proto;
    }, n.prototype.isEqual = function(t) {
        return t instanceof n && this.key.isEqual(t.key) && this.version.isEqual(t.version) && this.he === t.he && this.hasCommittedMutations === t.hasCommittedMutations && this.we.isEqual(t.we);
    }, n.prototype.toString = function() {
        return "Document(" + this.key + ", " + this.version + ", " + this.we.toString() + ", {hasLocalMutations: " + this.he + "}), {hasCommittedMutations: " + this.hasCommittedMutations + "})";
    }, Object.defineProperty(n.prototype, "hasPendingWrites", {
        get: function() {
            return this.he || this.hasCommittedMutations;
        },
        enumerable: !1,
        configurable: !0
    }), n;
}(Tn), In = /** @class */ function(e) {
    function n(t, n, r) {
        var i = this;
        return (i = e.call(this, t, n) || this).hasCommittedMutations = !(!r || !r.hasCommittedMutations), 
        i;
    }
    return t(n, e), n.prototype.toString = function() {
        return "NoDocument(" + this.key + ", " + this.version + ")";
    }, Object.defineProperty(n.prototype, "hasPendingWrites", {
        get: function() {
            return this.hasCommittedMutations;
        },
        enumerable: !1,
        configurable: !0
    }), n.prototype.isEqual = function(t) {
        return t instanceof n && t.hasCommittedMutations === this.hasCommittedMutations && t.version.isEqual(this.version) && t.key.isEqual(this.key);
    }, n;
}(Tn), An = /** @class */ function(e) {
    function n() {
        return null !== e && e.apply(this, arguments) || this;
    }
    return t(n, e), n.prototype.toString = function() {
        return "UnknownDocument(" + this.key + ", " + this.version + ")";
    }, Object.defineProperty(n.prototype, "hasPendingWrites", {
        get: function() {
            return !0;
        },
        enumerable: !1,
        configurable: !0
    }), n.prototype.isEqual = function(t) {
        return t instanceof n && t.version.isEqual(this.version) && t.key.isEqual(this.key);
    }, n;
}(Tn), Cn = 
/**
     * Initializes a Query with a path and optional additional query constraints.
     * Path must currently be empty if this is a collection group query.
     */
function(t, e, n, r, i, o /* First */ , u, s) {
    void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), 
    void 0 === i && (i = null), void 0 === o && (o = "F"), void 0 === u && (u = null), 
    void 0 === s && (s = null), this.path = t, this.collectionGroup = e, this.me = n, 
    this.filters = r, this.limit = i, this.limitType = o, this.startAt = u, this.endAt = s, 
    this.Te = null, 
    // The corresponding `Target` of this `Query` instance.
    this.Ae = null, this.startAt, this.endAt;
};

/**
 * Represents a document in Firestore with a key, version, data and whether the
 * data has local mutations applied to it.
 */ function Dn(t) {
    return new Cn(t);
}

/**
 * Helper to convert a collection group query into a collection query at a
 * specific path. This is used when executing collection group queries, since
 * we have to split the query into a set of collection queries at multiple
 * paths.
 */ function kn(t) {
    return !$(t.limit) && "F" /* First */ === t.limitType;
}

function Vn(t) {
    return !$(t.limit) && "L" /* Last */ === t.limitType;
}

function _n(t) {
    return t.me.length > 0 ? t.me[0].field : null;
}

function On(t) {
    for (var e = 0, n = t.filters; e < n.length; e++) {
        var r = n[e];
        if (r.Ie()) return r.field;
    }
    return null;
}

/**
 * Checks if any of the provided Operators are included in the query and
 * returns the first one that is, or null if none are.
 */
/**
 * Returns whether the query matches a collection group rather than a specific
 * collection.
 */ function Pn(t) {
    return null !== t.collectionGroup;
}

/**
 * Returns the implicit order by constraint that is used to execute the Query,
 * which can be different from the order by constraints the user provided (e.g.
 * the SDK and backend always orders by `__name__`).
 */ function Ln(t) {
    var e = L(t);
    if (null === e.Te) {
        e.Te = [];
        var n = On(e), r = _n(e);
        if (null !== n && null === r) 
        // In order to implicitly add key ordering, we must also add the
        // inequality filter field for it to be a valid query.
        // Note that the default inequality field and key ordering is ascending.
        n.tt() || e.Te.push(new tr(n)), e.Te.push(new tr(K.nt(), "asc" /* ASCENDING */)); else {
            for (var i = !1, o = 0, u = e.me; o < u.length; o++) {
                var s = u[o];
                e.Te.push(s), s.field.tt() && (i = !0);
            }
            if (!i) {
                // The order of the implicit key ordering always matches the last
                // explicit order by
                var a = e.me.length > 0 ? e.me[e.me.length - 1].dir : "asc" /* ASCENDING */;
                e.Te.push(new tr(K.nt(), a));
            }
        }
    }
    return e.Te;
}

/**
 * Converts this `Query` instance to it's corresponding `Target` representation.
 */ function Rn(t) {
    var e = L(t);
    if (!e.Ae) if ("F" /* First */ === e.limitType) e.Ae = et(e.path, e.collectionGroup, Ln(e), e.filters, e.limit, e.startAt, e.endAt); else {
        for (
        // Flip the orderBy directions since we want the last results
        var n = [], r = 0, i = Ln(e); r < i.length; r++) {
            var o = i[r], u = "desc" /* DESCENDING */ === o.dir ? "asc" /* ASCENDING */ : "desc" /* DESCENDING */;
            n.push(new tr(o.field, u));
        }
        // We need to swap the cursors to match the now-flipped query ordering.
                var s = e.endAt ? new Kn(e.endAt.position, !e.endAt.before) : null, a = e.startAt ? new Kn(e.startAt.position, !e.startAt.before) : null;
        // Now return as a LimitType.First query.
                e.Ae = et(e.path, e.collectionGroup, n, e.filters, e.limit, s, a);
    }
    return e.Ae;
}

function Sn(t, e, n) {
    return new Cn(t.path, t.collectionGroup, t.me.slice(), t.filters.slice(), e, n, t.startAt, t.endAt);
}

function Un(t, e) {
    return rt(Rn(t), Rn(e)) && t.limitType === e.limitType;
}

// TODO(b/29183165): This is used to get a unique string from a query to, for
// example, use as a dictionary key, but the implementation is subject to
// collisions. Make it collision-free.
function qn(t) {
    return nt(Rn(t)) + "|lt:" + t.limitType;
}

function jn(t) {
    return "Query(target=" + function(t) {
        var e = t.path.Y();
        return null !== t.collectionGroup && (e += " collectionGroup=" + t.collectionGroup), 
        t.filters.length > 0 && (e += ", filters: [" + t.filters.map((function(t) {
            return (e = t).field.Y() + " " + e.op + " " + Jt(e.value);
            /** Returns a debug description for `filter`. */            var e;
            /** Filter that matches on key fields (i.e. '__name__'). */        })).join(", ") + "]"), 
        $(t.limit) || (e += ", limit: " + t.limit), t.orderBy.length > 0 && (e += ", orderBy: [" + t.orderBy.map((function(t) {
            return function(t) {
                return t.field.Y() + " (" + t.dir + ")";
            }(t);
        })).join(", ") + "]"), t.startAt && (e += ", startAt: " + Jn(t.startAt)), t.endAt && (e += ", endAt: " + Jn(t.endAt)), 
        "Target(" + e + ")";
    }(Rn(t)) + "; limitType=" + t.limitType + ")";
}

/** Returns whether `doc` matches the constraints of `query`. */ function Mn(t, e) {
    return function(t, e) {
        var n = e.key.path;
        return null !== t.collectionGroup ? e.key.rt(t.collectionGroup) && t.path.G(n) : J.ot(t.path) ? t.path.isEqual(n) : t.path.K(n);
    }(t, e) && function(t, e) {
        for (var n = 0, r = t.me; n < r.length; n++) {
            var i = r[n];
            // order by key always matches
                        if (!i.field.tt() && null === e.field(i.field)) return !1;
        }
        return !0;
    }(t, e) && function(t, e) {
        for (var n = 0, r = t.filters; n < r.length; n++) {
            if (!r[n].matches(e)) return !1;
        }
        return !0;
    }(t, e) && function(t, e) {
        return !(t.startAt && !$n(t.startAt, Ln(t), e)) && (!t.endAt || !$n(t.endAt, Ln(t), e));
    }(t, e);
}

function xn(t) {
    return function(e, n) {
        for (var r = !1, i = 0, o = Ln(t); i < o.length; i++) {
            var u = o[i], s = er(u, e, n);
            if (0 !== s) return s;
            r = r || u.field.tt();
        }
        return 0;
    };
}

var Fn = /** @class */ function(e) {
    function n(t, n, r) {
        var i = this;
        return (i = e.call(this) || this).field = t, i.op = n, i.value = r, i;
    }
    /**
     * Creates a filter based on the provided arguments.
     */    return t(n, e), n.create = function(t, e, r) {
        return t.tt() ? "in" /* IN */ === e || "not-in" /* NOT_IN */ === e ? this.Re(t, e, r) : new zn(t, e, r) : "array-contains" /* ARRAY_CONTAINS */ === e ? new Yn(t, r) : "in" /* IN */ === e ? new Hn(t, r) : "not-in" /* NOT_IN */ === e ? new Qn(t, r) : "array-contains-any" /* ARRAY_CONTAINS_ANY */ === e ? new Xn(t, r) : new n(t, e, r);
    }, n.Re = function(t, e, n) {
        return "in" /* IN */ === e ? new Gn(t, n) : new Bn(t, n);
    }, n.prototype.matches = function(t) {
        var e = t.field(this.field);
        // Types do not have to match in NOT_EQUAL filters.
                return "!=" /* NOT_EQUAL */ === this.op ? null !== e && this.Pe(Xt(e, this.value)) : null !== e && Yt(this.value) === Yt(e) && this.Pe(Xt(e, this.value));
        // Only compare types with matching backend order (such as double and int).
        }, n.prototype.Pe = function(t) {
        switch (this.op) {
          case "<" /* LESS_THAN */ :
            return t < 0;

          case "<=" /* LESS_THAN_OR_EQUAL */ :
            return t <= 0;

          case "==" /* EQUAL */ :
            return 0 === t;

          case "!=" /* NOT_EQUAL */ :
            return 0 !== t;

          case ">" /* GREATER_THAN */ :
            return t > 0;

          case ">=" /* GREATER_THAN_OR_EQUAL */ :
            return t >= 0;

          default:
            return O();
        }
    }, n.prototype.Ie = function() {
        return [ "<" /* LESS_THAN */ , "<=" /* LESS_THAN_OR_EQUAL */ , ">" /* GREATER_THAN */ , ">=" /* GREATER_THAN_OR_EQUAL */ , "!=" /* NOT_EQUAL */ , "not-in" /* NOT_IN */ ].indexOf(this.op) >= 0;
    }, n;
}((function() {}));

var zn = /** @class */ function(e) {
    function n(t, n, r) {
        var i = this;
        return (i = e.call(this, t, n, r) || this).key = J.it(r.referenceValue), i;
    }
    return t(n, e), n.prototype.matches = function(t) {
        var e = J.k(t.key, this.key);
        return this.Pe(e);
    }, n;
}(Fn), Gn = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this, t, "in" /* IN */ , n) || this).keys = Wn("in" /* IN */ , n), 
        r;
    }
    return t(n, e), n.prototype.matches = function(t) {
        return this.keys.some((function(e) {
            return e.isEqual(t.key);
        }));
    }, n;
}(Fn), Bn = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this, t, "not-in" /* NOT_IN */ , n) || this).keys = Wn("not-in" /* NOT_IN */ , n), 
        r;
    }
    return t(n, e), n.prototype.matches = function(t) {
        return !this.keys.some((function(e) {
            return e.isEqual(t.key);
        }));
    }, n;
}(Fn);

/** Filter that matches on key fields within an array. */ function Wn(t, e) {
    var n;
    return ((null === (n = e.arrayValue) || void 0 === n ? void 0 : n.values) || []).map((function(t) {
        return J.it(t.referenceValue);
    }));
}

/** A Filter that implements the array-contains operator. */ var Yn = /** @class */ function(e) {
    function n(t, n) {
        return e.call(this, t, "array-contains" /* ARRAY_CONTAINS */ , n) || this;
    }
    return t(n, e), n.prototype.matches = function(t) {
        var e = t.field(this.field);
        return ie(e) && Qt(e.arrayValue, this.value);
    }, n;
}(Fn), Hn = /** @class */ function(e) {
    function n(t, n) {
        return e.call(this, t, "in" /* IN */ , n) || this;
    }
    return t(n, e), n.prototype.matches = function(t) {
        var e = t.field(this.field);
        return null !== e && Qt(this.value.arrayValue, e);
    }, n;
}(Fn), Qn = /** @class */ function(e) {
    function n(t, n) {
        return e.call(this, t, "not-in" /* NOT_IN */ , n) || this;
    }
    return t(n, e), n.prototype.matches = function(t) {
        if (Qt(this.value.arrayValue, {
            nullValue: "NULL_VALUE"
        })) return !1;
        var e = t.field(this.field);
        return null !== e && !Qt(this.value.arrayValue, e);
    }, n;
}(Fn), Xn = /** @class */ function(e) {
    function n(t, n) {
        return e.call(this, t, "array-contains-any" /* ARRAY_CONTAINS_ANY */ , n) || this;
    }
    return t(n, e), n.prototype.matches = function(t) {
        var e = this, n = t.field(this.field);
        return !(!ie(n) || !n.arrayValue.values) && n.arrayValue.values.some((function(t) {
            return Qt(e.value.arrayValue, t);
        }));
    }, n;
}(Fn), Kn = function(t, e) {
    this.position = t, this.before = e;
};

/** A Filter that implements the IN operator. */ function Jn(t) {
    // TODO(b/29183165): Make this collision robust.
    return (t.before ? "b" : "a") + ":" + t.position.map((function(t) {
        return Jt(t);
    })).join(",");
}

/**
 * Returns true if a document sorts before a bound using the provided sort
 * order.
 */ function $n(t, e, n) {
    for (var r = 0, i = 0; i < t.position.length; i++) {
        var o = e[i], u = t.position[i];
        if (r = o.field.tt() ? J.k(J.it(u.referenceValue), n.key) : Xt(u, n.field(o.field)), 
        "desc" /* DESCENDING */ === o.dir && (r *= -1), 0 !== r) break;
    }
    return t.before ? r <= 0 : r < 0;
}

function Zn(t, e) {
    if (null === t) return null === e;
    if (null === e) return !1;
    if (t.before !== e.before || t.position.length !== e.position.length) return !1;
    for (var n = 0; n < t.position.length; n++) if (!Ht(t.position[n], e.position[n])) return !1;
    return !0;
}

/**
 * An ordering on a field, in some Direction. Direction defaults to ASCENDING.
 */ var tr = function(t, e /* ASCENDING */) {
    void 0 === e && (e = "asc"), this.field = t, this.dir = e;
};

function er(t, e, n) {
    var r = t.field.tt() ? J.k(e.key, n.key) : function(t, e, n) {
        var r = e.field(t), i = n.field(t);
        return null !== r && null !== i ? Xt(r, i) : O();
    }(t.field, e, n);
    switch (t.dir) {
      case "asc" /* ASCENDING */ :
        return r;

      case "desc" /* DESCENDING */ :
        return -1 * r;

      default:
        return O();
    }
}

function nr(t, e) {
    return t.dir === e.dir && t.field.isEqual(e.field);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A batch of mutations that will be sent as one unit to the backend.
 */ var rr = /** @class */ function() {
    /**
     * @param batchId - The unique ID of this mutation batch.
     * @param localWriteTime - The original write time of this mutation.
     * @param baseMutations - Mutations that are used to populate the base
     * values when this mutation is applied locally. This can be used to locally
     * overwrite values that are persisted in the remote document cache. Base
     * mutations are never sent to the backend.
     * @param mutations - The user-provided mutations in this mutation batch.
     * User-provided mutations are applied both locally and remotely on the
     * backend.
     */
    function t(t, e, n, r) {
        this.batchId = t, this.ye = e, this.baseMutations = n, this.mutations = r
        /**
     * Applies all the mutations in this MutationBatch to the specified document
     * to create a new remote document
     *
     * @param docKey - The key of the document to apply mutations to.
     * @param maybeDoc - The document to apply mutations to.
     * @param batchResult - The result of applying the MutationBatch to the
     * backend.
     */;
    }
    return t.prototype.Ve = function(t, e, n) {
        for (var r = n.pe, i = 0; i < this.mutations.length; i++) {
            var o = this.mutations[i];
            o.key.isEqual(t) && (e = un(o, e, r[i]));
        }
        return e;
    }, 
    /**
     * Computes the local view of a document given all the mutations in this
     * batch.
     *
     * @param docKey - The key of the document to apply mutations to.
     * @param maybeDoc - The document to apply mutations to.
     */
    t.prototype.ge = function(t, e) {
        // First, apply the base state. This allows us to apply non-idempotent
        // transform against a consistent set of values.
        for (var n = 0, r = this.baseMutations; n < r.length; n++) {
            var i = r[n];
            i.key.isEqual(t) && (e = sn(i, e, e, this.ye));
        }
        // Second, apply all user-provided mutations.
        for (var o = e, u = 0, s = this.mutations; u < s.length; u++) {
            var a = s[u];
            a.key.isEqual(t) && (e = sn(a, e, o, this.ye));
        }
        return e;
    }, 
    /**
     * Computes the local view for all provided documents given the mutations in
     * this batch.
     */
    t.prototype.ve = function(t) {
        var e = this, n = t;
        // TODO(mrschmidt): This implementation is O(n^2). If we apply the mutations
        // directly (as done in `applyToLocalView()`), we can reduce the complexity
        // to O(n).
                return this.mutations.forEach((function(r) {
            var i = e.ge(r.key, t.get(r.key));
            i && (n = n.Tt(r.key, i));
        })), n;
    }, t.prototype.keys = function() {
        return this.mutations.reduce((function(t, e) {
            return t.add(e.key);
        }), It());
    }, t.prototype.isEqual = function(t) {
        return this.batchId === t.batchId && B(this.mutations, t.mutations, (function(t, e) {
            return cn(t, e);
        })) && B(this.baseMutations, t.baseMutations, (function(t, e) {
            return cn(t, e);
        }));
    }, t;
}(), ir = /** @class */ function() {
    function t(t, e, n, 
    /**
     * A pre-computed mapping from each mutated document to the resulting
     * version.
     */
    r) {
        this.batch = t, this.be = e, this.pe = n, this.Ce = r
        /**
     * Creates a new MutationBatchResult for the given batch and results. There
     * must be one result for each mutation in the batch. This static factory
     * caches a document=&gt;version mapping (docVersions).
     */;
    }
    return t.from = function(e, n, r) {
        P(e.mutations.length === r.length);
        for (var i = Tt, o = e.mutations, u = 0; u < o.length; u++) i = i.Tt(o[u].key, r[u].version);
        return new t(e, n, r, i);
    }, t;
}(), or = /** @class */ function() {
    function t(t, e) {
        this.Se = t, this.De = e, 
        /**
             * The inner map for a key/value pair. Due to the possibility of collisions we
             * keep a list of entries that we do a linear search through to find an actual
             * match. Note that collisions should be rare, so we still expect near
             * constant time lookups in practice.
             */
        this.Ne = {}
        /** Get a value for this key, or undefined if it does not exist. */;
    }
    return t.prototype.get = function(t) {
        var e = this.Se(t), n = this.Ne[e];
        if (void 0 !== n) for (var r = 0, i = n; r < i.length; r++) {
            var o = i[r], u = o[0], s = o[1];
            if (this.De(u, t)) return s;
        }
    }, t.prototype.has = function(t) {
        return void 0 !== this.get(t);
    }, 
    /** Put this key and value in the map. */ t.prototype.set = function(t, e) {
        var n = this.Se(t), r = this.Ne[n];
        if (void 0 !== r) {
            for (var i = 0; i < r.length; i++) if (this.De(r[i][0], t)) return void (r[i] = [ t, e ]);
            r.push([ t, e ]);
        } else this.Ne[n] = [ [ t, e ] ];
    }, 
    /**
     * Remove this key from the map. Returns a boolean if anything was deleted.
     */
    t.prototype.delete = function(t) {
        var e = this.Se(t), n = this.Ne[e];
        if (void 0 === n) return !1;
        for (var r = 0; r < n.length; r++) if (this.De(n[r][0], t)) return 1 === n.length ? delete this.Ne[e] : n.splice(r, 1), 
        !0;
        return !1;
    }, t.prototype.forEach = function(t) {
        xt(this.Ne, (function(e, n) {
            for (var r = 0, i = n; r < i.length; r++) {
                var o = i[r], u = o[0], s = o[1];
                t(u, s);
            }
        }));
    }, t.prototype.W = function() {
        return Ft(this.Ne);
    }, t;
}(), ur = /** @class */ function() {
    function t(t) {
        var e = this;
        // NOTE: next/catchCallback will always point to our own wrapper functions,
        // not the user's raw next() or catch() callbacks.
                this.xe = null, this.Fe = null, 
        // When the operation resolves, we'll set result or error and mark isDone.
        this.result = void 0, this.error = void 0, this.Oe = !1, 
        // Set to true when .then() or .catch() are called and prevents additional
        // chaining.
        this.Le = !1, t((function(t) {
            e.Oe = !0, e.result = t, e.xe && 
            // value should be defined unless T is Void, but we can't express
            // that in the type system.
            e.xe(t);
        }), (function(t) {
            e.Oe = !0, e.error = t, e.Fe && e.Fe(t);
        }));
    }
    return t.prototype.catch = function(t) {
        return this.next(void 0, t);
    }, t.prototype.next = function(e, n) {
        var r = this;
        return this.Le && O(), this.Le = !0, this.Oe ? this.error ? this.$e(n, this.error) : this.ke(e, this.result) : new t((function(t, i) {
            r.xe = function(n) {
                r.ke(e, n).next(t, i);
            }, r.Fe = function(e) {
                r.$e(n, e).next(t, i);
            };
        }));
    }, t.prototype.Me = function() {
        var t = this;
        return new Promise((function(e, n) {
            t.next(e, n);
        }));
    }, t.prototype.Ue = function(e) {
        try {
            var n = e();
            return n instanceof t ? n : t.resolve(n);
        } catch (e) {
            return t.reject(e);
        }
    }, t.prototype.ke = function(e, n) {
        return e ? this.Ue((function() {
            return e(n);
        })) : t.resolve(n);
    }, t.prototype.$e = function(e, n) {
        return e ? this.Ue((function() {
            return e(n);
        })) : t.reject(n);
    }, t.resolve = function(e) {
        return new t((function(t, n) {
            t(e);
        }));
    }, t.reject = function(e) {
        return new t((function(t, n) {
            n(e);
        }));
    }, t.qe = function(
    // Accept all Promise types in waitFor().
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e) {
        return new t((function(t, n) {
            var r = 0, i = 0, o = !1;
            e.forEach((function(e) {
                ++r, e.next((function() {
                    ++i, o && i === r && t();
                }), (function(t) {
                    return n(t);
                }));
            })), o = !0, i === r && t();
        }));
    }, 
    /**
     * Given an array of predicate functions that asynchronously evaluate to a
     * boolean, implements a short-circuiting `or` between the results. Predicates
     * will be evaluated until one of them returns `true`, then stop. The final
     * result will be whether any of them returned `true`.
     */
    t.Be = function(e) {
        for (var n = t.resolve(!1), r = function(e) {
            n = n.next((function(n) {
                return n ? t.resolve(n) : e();
            }));
        }, i = 0, o = e; i < o.length; i++) {
            r(o[i]);
        }
        return n;
    }, t.forEach = function(t, e) {
        var n = this, r = [];
        return t.forEach((function(t, i) {
            r.push(e.call(n, t, i));
        })), this.qe(r);
    }, t;
}(), sr = function() {
    var t = this;
    this.promise = new Promise((function(e, n) {
        t.resolve = e, t.reject = n;
    }));
};

/** The result of applying a mutation batch to the backend. */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ar(t) {
    return new he(t, /* useProto3Json= */ !0);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function cr(t) {
    /**
 * Returns true if obj is an object and contains at least one of the specified
 * methods.
 */
    return function(t, e) {
        if ("object" != typeof t || null === t) return !1;
        for (var n = t, r = 0, i = [ "next", "error", "complete" ]; r < i.length; r++) {
            var o = i[r];
            if (o in n && "function" == typeof n[o]) return !0;
        }
        return !1;
    }(t);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A readonly view of the local state of all documents we're tracking (i.e. we
 * have a cached version in remoteDocumentCache or local mutations for the
 * document). The view is computed by applying the mutations in the
 * MutationQueue to the RemoteDocumentCache.
 */ var hr = /** @class */ function() {
    function t(t, e, n) {
        this.Qe = t, this.je = e, this.We = n
        /**
     * Get the local view of the document identified by `key`.
     *
     * @returns Local view of the document or null if we don't have any cached
     * state for it.
     */;
    }
    return t.prototype.Ge = function(t, e) {
        var n = this;
        return this.je.Ke(t, e).next((function(r) {
            return n.ze(t, e, r);
        }));
    }, 
    /** Internal version of `getDocument` that allows reusing batches. */ t.prototype.ze = function(t, e, n) {
        return this.Qe.He(t, e).next((function(t) {
            for (var r = 0, i = n; r < i.length; r++) {
                t = i[r].ge(e, t);
            }
            return t;
        }));
    }, 
    // Returns the view of the given `docs` as they would appear after applying
    // all mutations in the given `batches`.
    t.prototype.Ye = function(t, e, n) {
        var r = wt();
        return e.forEach((function(t, e) {
            for (var i = 0, o = n; i < o.length; i++) {
                e = o[i].ge(t, e);
            }
            r = r.Tt(t, e);
        })), r;
    }, 
    /**
     * Gets the local view of the documents identified by `keys`.
     *
     * If we don't have cached state for a document in `keys`, a NoDocument will
     * be stored for that key in the resulting set.
     */
    t.prototype.Je = function(t, e) {
        var n = this;
        return this.Qe.getEntries(t, e).next((function(e) {
            return n.Xe(t, e);
        }));
    }, 
    /**
     * Similar to `getDocuments`, but creates the local view from the given
     * `baseDocs` without retrieving documents from the local store.
     */
    t.prototype.Xe = function(t, e) {
        var n = this;
        return this.je.Ze(t, e).next((function(r) {
            var i = n.Ye(t, e, r), o = mt();
            return i.forEach((function(t, e) {
                // TODO(http://b/32275378): Don't conflate missing / deleted.
                e || (e = new In(t, Y.min())), o = o.Tt(t, e);
            })), o;
        }));
    }, 
    /**
     * Performs a query against the local view of all documents.
     *
     * @param transaction - The persistence transaction.
     * @param query - The query to match documents against.
     * @param sinceReadTime - If not set to SnapshotVersion.min(), return only
     *     documents that have been read since this snapshot version (exclusive).
     */
    t.prototype.ts = function(t, e, n) {
        /**
 * Returns whether the query matches a single document by path (rather than a
 * collection).
 */
        return function(t) {
            return J.ot(t.path) && null === t.collectionGroup && 0 === t.filters.length;
        }(e) ? this.ns(t, e.path) : Pn(e) ? this.es(t, e, n) : this.ss(t, e, n);
    }, t.prototype.ns = function(t, e) {
        // Just do a simple document lookup.
        return this.Ge(t, new J(e)).next((function(t) {
            var e = Et();
            return t instanceof Nn && (e = e.Tt(t.key, t)), e;
        }));
    }, t.prototype.es = function(t, e, n) {
        var r = this, i = e.collectionGroup, o = Et();
        return this.We.rs(t, i).next((function(u) {
            return ur.forEach(u, (function(u) {
                var s = function(t, e) {
                    return new Cn(e, 
                    /*collectionGroup=*/ null, t.me.slice(), t.filters.slice(), t.limit, t.limitType, t.startAt, t.endAt);
                }(e, u.child(i));
                return r.ss(t, s, n).next((function(t) {
                    t.forEach((function(t, e) {
                        o = o.Tt(t, e);
                    }));
                }));
            })).next((function() {
                return o;
            }));
        }));
    }, t.prototype.ss = function(t, e, n) {
        var r, i, o = this;
        // Query the remote documents and overlay mutations.
                return this.Qe.ts(t, e, n).next((function(n) {
            return r = n, o.je.os(t, e);
        })).next((function(e) {
            return i = e, o.us(t, i, r).next((function(t) {
                r = t;
                for (var e = 0, n = i; e < n.length; e++) for (var o = n[e], u = 0, s = o.mutations; u < s.length; u++) {
                    var a = s[u], c = a.key, h = r.get(c), f = sn(a, h, h, o.ye);
                    r = f instanceof Nn ? r.Tt(c, f) : r.remove(c);
                }
            }));
        })).next((function() {
            // Finally, filter out any documents that don't actually match
            // the query.
            return r.forEach((function(t, n) {
                Mn(e, n) || (r = r.remove(t));
            })), r;
        }));
    }, t.prototype.us = function(t, e, n) {
        for (var r = It(), i = 0, o = e; i < o.length; i++) for (var u = 0, s = o[i].mutations; u < s.length; u++) {
            var a = s[u];
            a instanceof ln && null === n.get(a.key) && (r = r.add(a.key));
        }
        var c = n;
        return this.Qe.getEntries(t, r).next((function(t) {
            return t.forEach((function(t, e) {
                null !== e && e instanceof Nn && (c = c.Tt(t, e));
            })), c;
        }));
    }, t;
}(), fr = /** @class */ function() {
    function t(t, e, n, r) {
        this.targetId = t, this.fromCache = e, this.cs = n, this.hs = r;
    }
    return t.ls = function(e, n) {
        for (var r = It(), i = It(), o = 0, u = n.docChanges; o < u.length; o++) {
            var s = u[o];
            switch (s.type) {
              case 0 /* Added */ :
                r = r.add(s.doc.key);
                break;

              case 1 /* Removed */ :
                i = i.add(s.doc.key);
                // do nothing
                        }
        }
        return new t(e, n.fromCache, r, i);
    }, t;
}(), lr = /** @class */ function() {
    function t(t, e) {
        var n = this;
        this.previousValue = t, e && (e._s = function(t) {
            return n.fs(t);
        }, this.ds = function(t) {
            return e.ws(t);
        });
    }
    return t.prototype.fs = function(t) {
        return this.previousValue = Math.max(t, this.previousValue), this.previousValue;
    }, t.prototype.next = function() {
        var t = ++this.previousValue;
        return this.ds && this.ds(t), t;
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A set of changes to what documents are currently in view and out of view for
 * a given query. These changes are sent to the LocalStore by the View (via
 * the SyncEngine) and are used to pin / unpin documents as appropriate.
 */ lr.Es = -1;

/**
 * A helper for running delayed tasks following an exponential backoff curve
 * between attempts.
 *
 * Each delay is made up of a "base" delay which follows the exponential
 * backoff curve, and a +/- 50% "jitter" that is calculated and added to the
 * base delay. This prevents clients from accidentally synchronizing their
 * delays causing spikes of load to the backend.
 */
var pr = /** @class */ function() {
    function t(
    /**
     * The AsyncQueue to run backoff operations on.
     */
    t, 
    /**
     * The ID to use when scheduling backoff operations on the AsyncQueue.
     */
    e, 
    /**
     * The initial delay (used as the base delay on the first retry attempt).
     * Note that jitter will still be applied, so the actual delay could be as
     * little as 0.5*initialDelayMs.
     */
    n
    /**
     * The multiplier to use to determine the extended base delay after each
     * attempt.
     */ , r
    /**
     * The maximum base delay after which no further backoff is performed.
     * Note that jitter will still be applied, so the actual delay could be as
     * much as 1.5*maxDelayMs.
     */ , i) {
        void 0 === n && (n = 1e3), void 0 === r && (r = 1.5), void 0 === i && (i = 6e4), 
        this.Ts = t, this.As = e, this.Is = n, this.Rs = r, this.Ps = i, this.ys = 0, this.Vs = null, 
        /** The last backoff attempt, as epoch milliseconds. */
        this.ps = Date.now(), this.reset();
    }
    /**
     * Resets the backoff delay.
     *
     * The very next backoffAndWait() will have no delay. If it is called again
     * (i.e. due to an error), initialDelayMs (plus jitter) will be used, and
     * subsequent ones will increase according to the backoffFactor.
     */    return t.prototype.reset = function() {
        this.ys = 0;
    }, 
    /**
     * Resets the backoff delay to the maximum delay (e.g. for use after a
     * RESOURCE_EXHAUSTED error).
     */
    t.prototype.gs = function() {
        this.ys = this.Ps;
    }, 
    /**
     * Returns a promise that resolves after currentDelayMs, and increases the
     * delay for any subsequent attempts. If there was a pending backoff operation
     * already, it will be canceled.
     */
    t.prototype.vs = function(t) {
        var e = this;
        // Cancel any pending backoff operation.
                this.cancel();
        // First schedule using the current base (which may be 0 and should be
        // honored as such).
        var n = Math.floor(this.ys + this.bs()), r = Math.max(0, Date.now() - this.ps), i = Math.max(0, n - r);
        // Guard against lastAttemptTime being in the future due to a clock change.
                i > 0 && D("ExponentialBackoff", "Backing off for " + i + " ms (base delay: " + this.ys + " ms, delay with jitter: " + n + " ms, last attempt: " + r + " ms ago)"), 
        this.Vs = this.Ts.Cs(this.As, i, (function() {
            return e.ps = Date.now(), t();
        })), 
        // Apply backoff factor to determine next delay and ensure it is within
        // bounds.
        this.ys *= this.Rs, this.ys < this.Is && (this.ys = this.Is), this.ys > this.Ps && (this.ys = this.Ps);
    }, t.prototype.Ss = function() {
        null !== this.Vs && (this.Vs.Ds(), this.Vs = null);
    }, t.prototype.cancel = function() {
        null !== this.Vs && (this.Vs.cancel(), this.Vs = null);
    }, 
    /** Returns a random value in the range [-currentBaseMs/2, currentBaseMs/2] */ t.prototype.bs = function() {
        return (Math.random() - .5) * this.ys;
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Verifies whether `e` is an IndexedDbTransactionError. */ function dr(t) {
    // Use name equality, as instanceof checks on errors don't work with errors
    // that wrap other errors.
    return "IndexedDbTransactionError" === t.name;
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** The Platform's 'document' implementation or null if not available. */ function vr() {
    // `document` is not always available, e.g. in ReactNative and WebWorkers.
    // eslint-disable-next-line no-restricted-globals
    return "undefined" != typeof document ? document : null;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Represents an operation scheduled to be run in the future on an AsyncQueue.
 *
 * It is created via DelayedOperation.createAndSchedule().
 *
 * Supports cancellation (via cancel()) and early execution (via skipDelay()).
 *
 * Note: We implement `PromiseLike` instead of `Promise`, as the `Promise` type
 * in newer versions of TypeScript defines `finally`, which is not available in
 * IE.
 */ var yr = /** @class */ function() {
    function t(t, e, n, r, i) {
        this.Ns = t, this.As = e, this.xs = n, this.op = r, this.Fs = i, this.Os = new sr, 
        this.then = this.Os.promise.then.bind(this.Os.promise), 
        // It's normal for the deferred promise to be canceled (due to cancellation)
        // and so we attach a dummy catch callback to avoid
        // 'UnhandledPromiseRejectionWarning' log spam.
        this.Os.promise.catch((function(t) {}))
        /**
     * Creates and returns a DelayedOperation that has been scheduled to be
     * executed on the provided asyncQueue after the provided delayMs.
     *
     * @param asyncQueue - The queue to schedule the operation on.
     * @param id - A Timer ID identifying the type of operation this is.
     * @param delayMs - The delay (ms) before the operation should be scheduled.
     * @param op - The operation to run.
     * @param removalCallback - A callback to be called synchronously once the
     *   operation is executed or canceled, notifying the AsyncQueue to remove it
     *   from its delayedOperations list.
     *   PORTING NOTE: This exists to prevent making removeDelayedOperation() and
     *   the DelayedOperation class public.
     */;
    }
    return t.Ls = function(e, n, r, i, o) {
        var u = new t(e, n, Date.now() + r, i, o);
        return u.start(r), u;
    }, 
    /**
     * Starts the timer. This is called immediately after construction by
     * createAndSchedule().
     */
    t.prototype.start = function(t) {
        var e = this;
        this.$s = setTimeout((function() {
            return e.ks();
        }), t);
    }, 
    /**
     * Queues the operation to run immediately (if it hasn't already been run or
     * canceled).
     */
    t.prototype.Ds = function() {
        return this.ks();
    }, 
    /**
     * Cancels the operation if it hasn't already been executed or canceled. The
     * promise will be rejected.
     *
     * As long as the operation has not yet been run, calling cancel() provides a
     * guarantee that the operation will not be run.
     */
    t.prototype.cancel = function(t) {
        null !== this.$s && (this.clearTimeout(), this.Os.reject(new S(R.CANCELLED, "Operation cancelled" + (t ? ": " + t : ""))));
    }, t.prototype.ks = function() {
        var t = this;
        this.Ns.Ms((function() {
            return null !== t.$s ? (t.clearTimeout(), t.op().then((function(e) {
                return t.Os.resolve(e);
            }))) : Promise.resolve();
        }));
    }, t.prototype.clearTimeout = function() {
        null !== this.$s && (this.Fs(this), clearTimeout(this.$s), this.$s = null);
    }, t;
}(), gr = /** @class */ function() {
    function t() {
        var t = this;
        // The last promise in the queue.
                this.Us = Promise.resolve(), 
        // A list of retryable operations. Retryable operations are run in order and
        // retried with backoff.
        this.qs = [], 
        // Is this AsyncQueue being shut down? Once it is set to true, it will not
        // be changed again.
        this.Bs = !1, 
        // Operations scheduled to be queued in the future. Operations are
        // automatically removed after they are run or canceled.
        this.Qs = [], 
        // visible for testing
        this.js = null, 
        // Flag set while there's an outstanding AsyncQueue operation, used for
        // assertion sanity-checks.
        this.Ws = !1, 
        // List of TimerIds to fast-forward delays for.
        this.Gs = [], 
        // Backoff timer used to schedule retries for retryable operations
        this.Ks = new pr(this, "async_queue_retry" /* AsyncQueueRetry */), 
        // Visibility handler that triggers an immediate retry of all retryable
        // operations. Meant to speed up recovery when we regain file system access
        // after page comes into foreground.
        this.zs = function() {
            var e = vr();
            e && D("AsyncQueue", "Visibility state changed to " + e.visibilityState), t.Ks.Ss();
        };
        var e = vr();
        e && "function" == typeof e.addEventListener && e.addEventListener("visibilitychange", this.zs);
    }
    return Object.defineProperty(t.prototype, "Hs", {
        // Is this AsyncQueue being shut down? If true, this instance will not enqueue
        // any new operations, Promises from enqueue requests will not resolve.
        get: function() {
            return this.Bs;
        },
        enumerable: !1,
        configurable: !0
    }), 
    /**
     * Adds a new operation to the queue without waiting for it to complete (i.e.
     * we ignore the Promise result).
     */
    t.prototype.Ms = function(t) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.enqueue(t);
    }, 
    /**
     * Regardless if the queue has initialized shutdown, adds a new operation to the
     * queue without waiting for it to complete (i.e. we ignore the Promise result).
     */
    t.prototype.Ys = function(t) {
        this.Js(), 
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.Xs(t);
    }, 
    /**
     * Initialize the shutdown of this queue. Once this method is called, the
     * only possible way to request running an operation is through
     * `enqueueEvenWhileRestricted()`.
     */
    t.prototype.Zs = function() {
        if (!this.Bs) {
            this.Bs = !0;
            var t = vr();
            t && "function" == typeof t.removeEventListener && t.removeEventListener("visibilitychange", this.zs);
        }
    }, 
    /**
     * Adds a new operation to the queue. Returns a promise that will be resolved
     * when the promise returned by the new operation is (with its value).
     */
    t.prototype.enqueue = function(t) {
        return this.Js(), this.Bs ? new Promise((function(t) {})) : this.Xs(t);
    }, 
    /**
     * Enqueue a retryable operation.
     *
     * A retryable operation is rescheduled with backoff if it fails with a
     * IndexedDbTransactionError (the error type used by SimpleDb). All
     * retryable operations are executed in order and only run if all prior
     * operations were retried successfully.
     */
    t.prototype.ti = function(t) {
        var e = this;
        this.Ms((function() {
            return e.qs.push(t), e.ni();
        }));
    }, 
    /**
     * Runs the next operation from the retryable queue. If the operation fails,
     * reschedules with backoff.
     */
    t.prototype.ni = function() {
        return e(this, void 0, void 0, (function() {
            var t, e = this;
            return n(this, (function(n) {
                switch (n.label) {
                  case 0:
                    if (0 === this.qs.length) return [ 3 /*break*/ , 5 ];
                    n.label = 1;

                  case 1:
                    return n.trys.push([ 1, 3, , 4 ]), [ 4 /*yield*/ , this.qs[0]() ];

                  case 2:
                    return n.sent(), this.qs.shift(), this.Ks.reset(), [ 3 /*break*/ , 4 ];

                  case 3:
                    if (!dr(t = n.sent())) throw t;
                    // Failure will be handled by AsyncQueue
                                        return D("AsyncQueue", "Operation failed with retryable error: " + t), 
                    [ 3 /*break*/ , 4 ];

                  case 4:
                    this.qs.length > 0 && 
                    // If there are additional operations, we re-schedule `retryNextOp()`.
                    // This is necessary to run retryable operations that failed during
                    // their initial attempt since we don't know whether they are already
                    // enqueued. If, for example, `op1`, `op2`, `op3` are enqueued and `op1`
                    // needs to  be re-run, we will run `op1`, `op1`, `op2` using the
                    // already enqueued calls to `retryNextOp()`. `op3()` will then run in the
                    // call scheduled here.
                    // Since `backoffAndRun()` cancels an existing backoff and schedules a
                    // new backoff on every call, there is only ever a single additional
                    // operation in the queue.
                    this.Ks.vs((function() {
                        return e.ni();
                    })), n.label = 5;

                  case 5:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.Xs = function(t) {
        var e = this, n = this.Us.then((function() {
            return e.Ws = !0, t().catch((function(t) {
                // Re-throw the error so that this.tail becomes a rejected Promise and
                // all further attempts to chain (via .then) will just short-circuit
                // and return the rejected Promise.
                throw e.js = t, e.Ws = !1, k("INTERNAL UNHANDLED ERROR: ", 
                /**
 * Chrome includes Error.message in Error.stack. Other browsers do not.
 * This returns expected output of message + stack when available.
 * @param error - Error or FirestoreError
 */
                function(t) {
                    var e = t.message || "";
                    return t.stack && (e = t.stack.includes(t.message) ? t.stack : t.message + "\n" + t.stack), 
                    e;
                }(t)), t;
            })).then((function(t) {
                return e.Ws = !1, t;
            }));
        }));
        return this.Us = n, n;
    }, 
    /**
     * Schedules an operation to be queued on the AsyncQueue once the specified
     * `delayMs` has elapsed. The returned DelayedOperation can be used to cancel
     * or fast-forward the operation prior to its running.
     */
    t.prototype.Cs = function(t, e, n) {
        var r = this;
        this.Js(), 
        // Fast-forward delays for timerIds that have been overriden.
        this.Gs.indexOf(t) > -1 && (e = 0);
        var i = yr.Ls(this, t, e, n, (function(t) {
            return r.ei(t);
        }));
        return this.Qs.push(i), i;
    }, t.prototype.Js = function() {
        this.js && O();
    }, 
    /**
     * Verifies there's an operation currently in-progress on the AsyncQueue.
     * Unfortunately we can't verify that the running code is in the promise chain
     * of that operation, so this isn't a foolproof check, but it should be enough
     * to catch some bugs.
     */
    t.prototype.si = function() {}, 
    /**
     * Waits until all currently queued tasks are finished executing. Delayed
     * operations are not run.
     */
    t.prototype.ii = function() {
        return e(this, void 0, void 0, (function() {
            var t;
            return n(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return [ 4 /*yield*/ , t = this.Us ];

                  case 1:
                    e.sent(), e.label = 2;

                  case 2:
                    if (t !== this.Us) return [ 3 /*break*/ , 0 ];
                    e.label = 3;

                  case 3:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * For Tests: Determine if a delayed operation with a particular TimerId
     * exists.
     */
    t.prototype.ri = function(t) {
        for (var e = 0, n = this.Qs; e < n.length; e++) {
            if (n[e].As === t) return !0;
        }
        return !1;
    }, 
    /**
     * For Tests: Runs some or all delayed operations early.
     *
     * @param lastTimerId - Delayed operations up to and including this TimerId
     * will be drained. Pass TimerId.All to run all delayed operations.
     * @returns a Promise that resolves once all operations have been run.
     */
    t.prototype.oi = function(t) {
        var e = this;
        // Note that draining may generate more delayed ops, so we do that first.
                return this.ii().then((function() {
            // Run ops in the same order they'd run if they ran naturally.
            e.Qs.sort((function(t, e) {
                return t.xs - e.xs;
            }));
            for (var n = 0, r = e.Qs; n < r.length; n++) {
                var i = r[n];
                if (i.Ds(), "all" /* All */ !== t && i.As === t) break;
            }
            return e.ii();
        }));
    }, 
    /**
     * For Tests: Skip all subsequent delays for a timer id.
     */
    t.prototype.ui = function(t) {
        this.Gs.push(t);
    }, 
    /** Called once a DelayedOperation is run or canceled. */ t.prototype.ei = function(t) {
        // NOTE: indexOf / slice are O(n), but delayedOperations is expected to be small.
        var e = this.Qs.indexOf(t);
        this.Qs.splice(e, 1);
    }, t;
}();

/**
 * Returns a FirestoreError that can be surfaced to the user if the provided
 * error is an IndexedDbTransactionError. Re-throws the error otherwise.
 */
function mr(t, e) {
    if (k("AsyncQueue", e + ": " + t), dr(t)) return new S(R.UNAVAILABLE, e + ": " + t);
    throw t;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A query engine that takes advantage of the target document mapping in the
 * QueryCache. Query execution is optimized by only reading the documents that
 * previously matched a query plus any documents that were edited after the
 * query was last listened to.
 *
 * There are some cases when this optimization is not guaranteed to produce
 * the same results as full collection scans. In these cases, query
 * processing falls back to full scans. These cases are:
 *
 * - Limit queries where a document that matched the query previously no longer
 *   matches the query.
 *
 * - Limit queries where a document edit may cause the document to sort below
 *   another document that is in the local cache.
 *
 * - Queries that have never been CURRENT or free of limbo documents.
 */ var wr = /** @class */ function() {
    function t() {}
    /** Sets the document view to query against. */    return t.prototype.ci = function(t) {
        this.hi = t;
    }, 
    /** Returns all local documents matching the specified query. */ t.prototype.ts = function(t, e, n, r) {
        var i = this;
        // Queries that match all documents don't benefit from using
        // key-based lookups. It is more efficient to scan all documents in a
        // collection, rather than to perform individual lookups.
                return function(t) {
            return 0 === t.filters.length && null === t.limit && null == t.startAt && null == t.endAt && (0 === t.me.length || 1 === t.me.length && t.me[0].field.tt());
        }(e) || n.isEqual(Y.min()) ? this.ai(t, e) : this.hi.Je(t, r).next((function(o) {
            var s = i.li(e, o);
            return (kn(e) || Vn(e)) && i._i(e.limitType, s, r, n) ? i.ai(t, e) : (C() <= u.DEBUG && D("QueryEngine", "Re-using previous result from %s to execute query: %s", n.toString(), jn(e)), 
            i.hi.ts(t, e, n).next((function(t) {
                // We merge `previousResults` into `updateResults`, since
                // `updateResults` is already a DocumentMap. If a document is
                // contained in both lists, then its contents are the same.
                return s.forEach((function(e) {
                    t = t.Tt(e.key, e);
                })), t;
            })));
        }));
        // Queries that have never seen a snapshot without limbo free documents
        // should also be run as a full collection scan.
        }, 
    /** Applies the query filter and sorting to the provided documents.  */ t.prototype.li = function(t, e) {
        // Sort the documents and re-apply the query filter since previously
        // matching documents do not necessarily still match the query.
        var n = new vt(xn(t));
        return e.forEach((function(e, r) {
            r instanceof Nn && Mn(t, r) && (n = n.add(r));
        })), n;
    }, 
    /**
     * Determines if a limit query needs to be refilled from cache, making it
     * ineligible for index-free execution.
     *
     * @param sortedPreviousResults - The documents that matched the query when it
     * was last synchronized, sorted by the query's comparator.
     * @param remoteKeys - The document keys that matched the query at the last
     * snapshot.
     * @param limboFreeSnapshotVersion - The version of the snapshot when the
     * query was last synchronized.
     */
    t.prototype._i = function(t, e, n, r) {
        // The query needs to be refilled if a previously matching document no
        // longer matches.
        if (n.size !== e.size) return !0;
        // Limit queries are not eligible for index-free query execution if there is
        // a potential that an older document from cache now sorts before a document
        // that was previously part of the limit. This, however, can only happen if
        // the document at the edge of the limit goes out of limit.
        // If a document that is not the limit boundary sorts differently,
        // the boundary of the limit itself did not change and documents from cache
        // will continue to be "rejected" by this boundary. Therefore, we can ignore
        // any modifications that don't affect the last document.
                var i = "F" /* First */ === t ? e.last() : e.first();
        return !!i && (i.hasPendingWrites || i.version.F(r) > 0);
    }, t.prototype.ai = function(t, e) {
        return C() <= u.DEBUG && D("QueryEngine", "Using full collection scan to execute query:", jn(e)), 
        this.hi.ts(t, e, Y.min());
    }, t;
}(), br = function(t) {
    this.fi = t;
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Serializer for values stored in the LocalStore. */
/**
 * Encodes a `BundledQuery` from bundle proto to a Query object.
 *
 * This reconstructs the original query used to build the bundle being loaded,
 * including features exists only in SDKs (for example: limit-to-last).
 */
function Er(t) {
    var e = Ve({
        parent: t.parent,
        structuredQuery: t.structuredQuery
    });
    return "LAST" === t.limitType ? Sn(e, e.limit, "L" /* Last */) : e;
}

/** Encodes a NamedQuery proto object to a NamedQuery model object. */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * An in-memory implementation of IndexManager.
 */ var Tr = /** @class */ function() {
    function t() {
        this.di = new Nr;
    }
    return t.prototype.wi = function(t, e) {
        return this.di.add(e), ur.resolve();
    }, t.prototype.rs = function(t, e) {
        return ur.resolve(this.di.getEntries(e));
    }, t;
}(), Nr = /** @class */ function() {
    function t() {
        this.index = {};
    }
    // Returns false if the entry already existed.
        return t.prototype.add = function(t) {
        var e = t.j(), n = t.q(), r = this.index[e] || new vt(Q.k), i = !r.has(n);
        return this.index[e] = r.add(n), i;
    }, t.prototype.has = function(t) {
        var e = t.j(), n = t.q(), r = this.index[e];
        return r && r.has(n);
    }, t.prototype.getEntries = function(t) {
        return (this.index[t] || new vt(Q.k)).H();
    }, t;
}(), Ir = /** @class */ function() {
    function t(t) {
        this.Ei = t;
    }
    return t.prototype.next = function() {
        return this.Ei += 2, this.Ei;
    }, t.mi = function() {
        // The target cache generator must return '2' in its first call to `next()`
        // as there is no differentiation in the protocol layer between an unset
        // number and the number '0'. If we were to sent a target with target ID
        // '0', the backend would consider it unset and replace it with its own ID.
        return new t(0);
    }, t.Ti = function() {
        // Sync engine assigns target IDs for limbo document detection.
        return new t(-1);
    }, t;
}(), Ar = /** @class */ function() {
    function t(
    /** Manages our in-memory or durable persistence. */
    t, e, n, r) {
        this.persistence = t, this.Ai = e, this.serializer = r, 
        /**
             * Maps a targetID to data about its target.
             *
             * PORTING NOTE: We are using an immutable data structure on Web to make re-runs
             * of `applyRemoteEvent()` idempotent.
             */
        this.Ii = new lt(G), 
        /** Maps a target to its targetID. */
        // TODO(wuandy): Evaluate if TargetId can be part of Target.
        this.Ri = new or((function(t) {
            return nt(t);
        }), rt), 
        /**
             * The read time of the last entry processed by `getNewDocumentChanges()`.
             *
             * PORTING NOTE: This is only used for multi-tab synchronization.
             */
        this.Pi = Y.min(), this.je = t.yi(n), this.Vi = t.pi(), this.gi = t.vi(), this.bi = new hr(this.Vi, this.je, this.persistence.Ci()), 
        this.Si = t.Di(), this.Ai.ci(this.bi);
    }
    return t.prototype.Ni = function(t) {
        var e = this;
        return this.persistence.runTransaction("Collect garbage", "readwrite-primary", (function(n) {
            return t.xi(n, e.Ii);
        }));
    }, t;
}();

/**
 * Internal implementation of the collection-parent index exposed by MemoryIndexManager.
 * Also used for in-memory caching by IndexedDbIndexManager and initial index population
 * in indexeddb_schema.ts
 */
/**
 * Tells the LocalStore that the currently authenticated user has changed.
 *
 * In response the local store switches the mutation queue to the new user and
 * returns any resulting document changes.
 */
// PORTING NOTE: Android and iOS only return the documents affected by the
// change.
function Cr(t, r) {
    return e(this, void 0, void 0, (function() {
        var e, i, o, u;
        return n(this, (function(n) {
            switch (n.label) {
              case 0:
                return e = L(t), i = e.je, o = e.bi, [ 4 /*yield*/ , e.persistence.runTransaction("Handle user change", "readonly", (function(t) {
                    // Swap out the mutation queue, grabbing the pending mutation batches
                    // before and after.
                    var n;
                    return e.je.Fi(t).next((function(u) {
                        return n = u, i = e.persistence.yi(r), 
                        // Recreate our LocalDocumentsView using the new
                        // MutationQueue.
                        o = new hr(e.Vi, i, e.persistence.Ci()), i.Fi(t);
                    })).next((function(e) {
                        for (var r = [], i = [], u = It(), s = 0, a = n
                        // Union the old/new changed keys.
                        ; s < a.length; s++) {
                            var c = a[s];
                            r.push(c.batchId);
                            for (var h = 0, f = c.mutations; h < f.length; h++) {
                                var l = f[h];
                                u = u.add(l.key);
                            }
                        }
                        for (var p = 0, d = e; p < d.length; p++) {
                            var v = d[p];
                            i.push(v.batchId);
                            for (var y = 0, g = v.mutations; y < g.length; y++) {
                                var m = g[y];
                                u = u.add(m.key);
                            }
                        }
                        // Return the set of all (potentially) changed documents and the list
                        // of mutation batch IDs that were affected by change.
                                                return o.Je(t, u).next((function(t) {
                            return {
                                Oi: t,
                                Li: r,
                                $i: i
                            };
                        }));
                    }));
                })) ];

              case 1:
                return u = n.sent(), [ 2 /*return*/ , (e.je = i, e.bi = o, e.Ai.ci(e.bi), u) ];
            }
        }));
    }));
}

/* Accepts locally generated Mutations and commit them to storage. */
/**
 * Acknowledges the given batch.
 *
 * On the happy path when a batch is acknowledged, the local store will
 *
 *  + remove the batch from the mutation queue;
 *  + apply the changes to the remote document cache;
 *  + recalculate the latency compensated view implied by those changes (there
 *    may be mutations in the queue that affect the documents but haven't been
 *    acknowledged yet); and
 *  + give the changed documents back the sync engine
 *
 * @returns The resulting (modified) documents.
 */ function Dr(t, e) {
    var n = L(t);
    return n.persistence.runTransaction("Acknowledge batch", "readwrite-primary", (function(t) {
        var r = e.batch.keys(), i = n.Vi.ki({
            Mi: !0
        });
        return function(t, e, n, r) {
            var i = n.batch, o = i.keys(), u = ur.resolve();
            return o.forEach((function(t) {
                u = u.next((function() {
                    return r.He(e, t);
                })).next((function(e) {
                    var o = e, u = n.Ce.get(t);
                    P(null !== u), (!o || o.version.F(u) < 0) && ((o = i.Ve(t, o, n)) && 
                    // We use the commitVersion as the readTime rather than the
                    // document's updateTime since the updateTime is not advanced
                    // for updates that do not modify the underlying document.
                    r.Ui(o, n.be));
                }));
            })), u.next((function() {
                return t.je.qi(e, i);
            }));
        }(n, t, e, i).next((function() {
            return i.apply(t);
        })).next((function() {
            return n.je.Bi(t);
        })).next((function() {
            return n.bi.Je(t, r);
        }));
    }));
}

/**
 * Removes mutations from the MutationQueue for the specified batch;
 * LocalDocuments will be recalculated.
 *
 * @returns The resulting modified documents.
 */
/**
 * Returns the last consistent snapshot processed (used by the RemoteStore to
 * determine whether to buffer incoming snapshots from the backend).
 */ function kr(t) {
    var e = L(t);
    return e.persistence.runTransaction("Get last remote snapshot version", "readonly", (function(t) {
        return e.gi.Qi(t);
    }));
}

/**
 * Updates the "ground-state" (remote) documents. We assume that the remote
 * event reflects any write batches that have been acknowledged or rejected
 * (i.e. we do not re-apply local mutations to updates from this event).
 *
 * LocalDocuments are re-calculated if there are remaining mutations in the
 * queue.
 */ function Vr(t, e) {
    var n = L(t), r = e.ft, i = n.Ii;
    return n.persistence.runTransaction("Apply remote event", "readwrite-primary", (function(t) {
        var o = n.Vi.ki({
            Mi: !0
        });
        // Reset newTargetDataByTargetMap in case this transaction gets re-run.
                i = n.Ii;
        var u = [];
        e.on.forEach((function(e, o) {
            var s = i.get(o);
            if (s) {
                // Only update the remote keys if the target is still active. This
                // ensures that we can persist the updated target data along with
                // the updated assignment.
                u.push(n.gi.ji(t, e.wn, o).next((function() {
                    return n.gi.Wi(t, e.fn, o);
                })));
                var a = e.resumeToken;
                // Update the resume token if the change includes one.
                                if (a.at() > 0) {
                    var c = s.wt(a, r).dt(t.Gi);
                    i = i.Tt(o, c), 
                    // Update the target data if there are target changes (or if
                    // sufficient time has passed since the last update).
                    /**
     * Returns true if the newTargetData should be persisted during an update of
     * an active target. TargetData should always be persisted when a target is
     * being released and should not call this function.
     *
     * While the target is active, TargetData updates can be omitted when nothing
     * about the target has changed except metadata like the resume token or
     * snapshot version. Occasionally it's worth the extra write to prevent these
     * values from getting too stale after a crash, but this doesn't have to be
     * too frequent.
     */
                    function(t, e, n) {
                        // Always persist target data if we don't already have a resume token.
                        return P(e.resumeToken.at() > 0), 0 === t.resumeToken.at() || (
                        // Don't allow resume token changes to be buffered indefinitely. This
                        // allows us to be reasonably up-to-date after a crash and avoids needing
                        // to loop over all active queries on shutdown. Especially in the browser
                        // we may not get time to do anything interesting while the current tab is
                        // closing.
                        e.ft.O() - t.ft.O() >= 3e8 || n.fn.size + n.dn.size + n.wn.size > 0);
                    }(s, c, e) && u.push(n.gi.Ki(t, c));
                }
            }
        }));
        var s = mt();
        // HACK: The only reason we allow a null snapshot version is so that we
        // can synthesize remote events when we get permission denied errors while
        // trying to resolve the state of a locally cached document that is in
        // limbo.
                if (e.cn.forEach((function(r, i) {
            e.hn.has(r) && u.push(n.persistence.Hi.zi(t, r));
        })), 
        // Each loop iteration only affects its "own" doc, so it's safe to get all the remote
        // documents in advance in a single call.
        u.push(
        /**
     * Populates document change buffer with documents from backend or a bundle.
     * Returns the document changes resulting from applying those documents.
     *
     * @param txn - Transaction to use to read existing documents from storage.
     * @param documentBuffer - Document buffer to collect the resulted changes to be
     *        applied to storage.
     * @param documents - Documents to be applied.
     * @param globalVersion - A `SnapshotVersion` representing the read time if all
     *        documents have the same read time.
     * @param documentVersions - A DocumentKey-to-SnapshotVersion map if documents
     *        have their own read time.
     *
     * Note: this function will use `documentVersions` if it is defined;
     * when it is not defined, resorts to `globalVersion`.
     */
        function(t, e, n, r, 
        // TODO(wuandy): We could add `readTime` to MaybeDocument instead to remove
        // this parameter.
        i) {
            var o = It();
            return n.forEach((function(t) {
                return o = o.add(t);
            })), e.getEntries(t, o).next((function(t) {
                var i = mt();
                return n.forEach((function(n, o) {
                    var u = t.get(n), s = r;
                    // Note: The order of the steps below is important, since we want
                    // to ensure that rejected limbo resolutions (which fabricate
                    // NoDocuments with SnapshotVersion.min()) never add documents to
                    // cache.
                                        o instanceof In && o.version.isEqual(Y.min()) ? (
                    // NoDocuments with SnapshotVersion.min() are used in manufactured
                    // events. We remove these documents from cache since we lost
                    // access.
                    e.Yi(n, s), i = i.Tt(n, o)) : null == u || o.version.F(u.version) > 0 || 0 === o.version.F(u.version) && u.hasPendingWrites ? (e.Ui(o, s), 
                    i = i.Tt(n, o)) : D("LocalStore", "Ignoring outdated watch update for ", n, ". Current version:", u.version, " Watch version:", o.version);
                })), i;
            }));
        }(t, o, e.cn, r).next((function(t) {
            s = t;
        }))), !r.isEqual(Y.min())) {
            var a = n.gi.Qi(t).next((function(e) {
                return n.gi.Ji(t, t.Gi, r);
            }));
            u.push(a);
        }
        return ur.qe(u).next((function() {
            return o.apply(t);
        })).next((function() {
            return n.bi.Xe(t, s);
        }));
    })).then((function(t) {
        return n.Ii = i, t;
    }));
}

/**
 * Gets the mutation batch after the passed in batchId in the mutation queue
 * or null if empty.
 * @param afterBatchId - If provided, the batch to search after.
 * @returns The next mutation or null if there wasn't one.
 */ function _r(t, e) {
    var n = L(t);
    return n.persistence.runTransaction("Get next mutation batch", "readonly", (function(t) {
        return void 0 === e && (e = -1), n.je.Xi(t, e);
    }));
}

/**
 * Reads the current value of a Document with a given key or null if not
 * found - used for testing.
 */
/**
 * Unpins all the documents associated with the given target. If
 * `keepPersistedTargetData` is set to false and Eager GC enabled, the method
 * directly removes the associated target data from the target cache.
 *
 * Releasing a non-existing `Target` is a no-op.
 */
// PORTING NOTE: `keepPersistedTargetData` is multi-tab only.
function Or(t, r, i) {
    return e(this, void 0, void 0, (function() {
        var e, o, u, s;
        return n(this, (function(n) {
            switch (n.label) {
              case 0:
                e = L(t), o = e.Ii.get(r), u = i ? "readwrite" : "readwrite-primary", n.label = 1;

              case 1:
                return n.trys.push([ 1, 4, , 5 ]), i ? [ 3 /*break*/ , 3 ] : [ 4 /*yield*/ , e.persistence.runTransaction("Release target", u, (function(t) {
                    return e.persistence.Hi.removeTarget(t, o);
                })) ];

              case 2:
                n.sent(), n.label = 3;

              case 3:
                return [ 3 /*break*/ , 5 ];

              case 4:
                if (!dr(s = n.sent())) throw s;
                // All `releaseTarget` does is record the final metadata state for the
                // target, but we've been recording this periodically during target
                // activity. If we lose this write this could cause a very slight
                // difference in the order of target deletion during GC, but we
                // don't define exact LRU semantics so this is acceptable.
                                return D("LocalStore", "Failed to update sequence numbers for target " + r + ": " + s), 
                [ 3 /*break*/ , 5 ];

              case 5:
                return e.Ii = e.Ii.remove(r), e.Ri.delete(o.target), [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * Runs the specified query against the local store and returns the results,
 * potentially taking advantage of query data from previous executions (such
 * as the set of remote keys).
 *
 * @param usePreviousResults - Whether results from previous executions can
 * be used to optimize this query execution.
 */ function Pr(t, e, n) {
    var r = L(t), i = Y.min(), o = It();
    return r.persistence.runTransaction("Execute query", "readonly", (function(t) {
        /**
     * Returns the TargetData as seen by the LocalStore, including updates that may
     * have not yet been persisted to the TargetCache.
     */
        // Visible for testing.
        return function(t, e, n) {
            var r = L(t), i = r.Ri.get(n);
            return void 0 !== i ? ur.resolve(r.Ii.get(i)) : r.gi.Zi(e, n);
        }(r, t, Rn(e)).next((function(e) {
            if (e) return i = e.lastLimboFreeSnapshotVersion, r.gi.tr(t, e.targetId).next((function(t) {
                o = t;
            }));
        })).next((function() {
            return r.Ai.ts(t, e, n ? i : Y.min(), n ? o : It());
        })).next((function(t) {
            return {
                documents: t,
                nr: o
            };
        }));
    }));
}

function Lr(t) {
    return e(this, void 0, void 0, (function() {
        return n(this, (function(e) {
            if (t.code !== R.FAILED_PRECONDITION || "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab." !== t.message) throw t;
            return D("LocalStore", "Unexpectedly lost primary lease"), [ 2 /*return*/ ];
        }));
    }));
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A PersistentStream is an abstract base class that represents a streaming RPC
 * to the Firestore backend. It's built on top of the connections own support
 * for streaming RPCs, and adds several critical features for our clients:
 *
 *   - Exponential backoff on failure
 *   - Authentication via CredentialsProvider
 *   - Dispatching all callbacks into the shared worker queue
 *   - Closing idle streams after 60 seconds of inactivity
 *
 * Subclasses of PersistentStream implement serialization of models to and
 * from the JSON representation of the protocol buffers for a specific
 * streaming RPC.
 *
 * ## Starting and Stopping
 *
 * Streaming RPCs are stateful and need to be start()ed before messages can
 * be sent and received. The PersistentStream will call the onOpen() function
 * of the listener once the stream is ready to accept requests.
 *
 * Should a start() fail, PersistentStream will call the registered onClose()
 * listener with a FirestoreError indicating what went wrong.
 *
 * A PersistentStream can be started and stopped repeatedly.
 *
 * Generic types:
 *  SendType: The type of the outgoing message of the underlying
 *    connection stream
 *  ReceiveType: The type of the incoming message of the underlying
 *    connection stream
 *  ListenerType: The type of the listener that will be used for callbacks
 */ var Rr = /** @class */ function() {
    function t(t, e, n, r, i, o) {
        this.Ts = t, this.er = n, this.sr = r, this.ir = i, this.listener = o, this.state = 0 /* Initial */ , 
        /**
             * A close count that's incremented every time the stream is closed; used by
             * getCloseGuardedDispatcher() to invalidate callbacks that happen after
             * close.
             */
        this.rr = 0, this.ur = null, this.stream = null, this.Ks = new pr(t, e)
        /**
     * Returns true if start() has been called and no error has occurred. True
     * indicates the stream is open or in the process of opening (which
     * encompasses respecting backoff, getting auth tokens, and starting the
     * actual RPC). Use isOpen() to determine if the stream is open and ready for
     * outbound requests.
     */;
    }
    return t.prototype.cr = function() {
        return 1 /* Starting */ === this.state || 2 /* Open */ === this.state || 4 /* Backoff */ === this.state;
    }, 
    /**
     * Returns true if the underlying RPC is open (the onOpen() listener has been
     * called) and the stream is ready for outbound requests.
     */
    t.prototype.hr = function() {
        return 2 /* Open */ === this.state;
    }, 
    /**
     * Starts the RPC. Only allowed if isStarted() returns false. The stream is
     * not immediately ready for use: onOpen() will be invoked when the RPC is
     * ready for outbound requests, at which point isOpen() will return true.
     *
     * When start returns, isStarted() will return true.
     */
    t.prototype.start = function() {
        3 /* Error */ !== this.state ? this.auth() : this.ar();
    }, 
    /**
     * Stops the RPC. This call is idempotent and allowed regardless of the
     * current isStarted() state.
     *
     * When stop returns, isStarted() and isOpen() will both return false.
     */
    t.prototype.stop = function() {
        return e(this, void 0, void 0, (function() {
            return n(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return this.cr() ? [ 4 /*yield*/ , this.close(0 /* Initial */) ] : [ 3 /*break*/ , 2 ];

                  case 1:
                    t.sent(), t.label = 2;

                  case 2:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * After an error the stream will usually back off on the next attempt to
     * start it. If the error warrants an immediate restart of the stream, the
     * sender can use this to indicate that the receiver should not back off.
     *
     * Each error will call the onClose() listener. That function can decide to
     * inhibit backoff if required.
     */
    t.prototype.lr = function() {
        this.state = 0 /* Initial */ , this.Ks.reset();
    }, 
    /**
     * Marks this stream as idle. If no further actions are performed on the
     * stream for one minute, the stream will automatically close itself and
     * notify the stream's onClose() handler with Status.OK. The stream will then
     * be in a !isStarted() state, requiring the caller to start the stream again
     * before further use.
     *
     * Only streams that are in state 'Open' can be marked idle, as all other
     * states imply pending network operations.
     */
    t.prototype._r = function() {
        var t = this;
        // Starts the idle time if we are in state 'Open' and are not yet already
        // running a timer (in which case the previous idle timeout still applies).
                this.hr() && null === this.ur && (this.ur = this.Ts.Cs(this.er, 6e4, (function() {
            return t.dr();
        })));
    }, 
    /** Sends a message to the underlying stream. */ t.prototype.wr = function(t) {
        this.Er(), this.stream.send(t);
    }, 
    /** Called by the idle timer when the stream should close due to inactivity. */ t.prototype.dr = function() {
        return e(this, void 0, void 0, (function() {
            return n(this, (function(t) {
                return this.hr() ? [ 2 /*return*/ , this.close(0 /* Initial */) ] : [ 2 /*return*/ ];
            }));
        }));
    }, 
    /** Marks the stream as active again. */ t.prototype.Er = function() {
        this.ur && (this.ur.cancel(), this.ur = null);
    }, 
    /**
     * Closes the stream and cleans up as necessary:
     *
     * * closes the underlying GRPC stream;
     * * calls the onClose handler with the given 'error';
     * * sets internal stream state to 'finalState';
     * * adjusts the backoff timer based on the error
     *
     * A new stream can be opened by calling start().
     *
     * @param finalState - the intended state of the stream after closing.
     * @param error - the error the connection was closed with.
     */
    t.prototype.close = function(t, r) {
        return e(this, void 0, void 0, (function() {
            return n(this, (function(e) {
                switch (e.label) {
                  case 0:
                    // Notify the listener that the stream closed.
                    // Cancel any outstanding timers (they're guaranteed not to execute).
                    return this.Er(), this.Ks.cancel(), 
                    // Invalidates any stream-related callbacks (e.g. from auth or the
                    // underlying stream), guaranteeing they won't execute.
                    this.rr++, 3 /* Error */ !== t ? 
                    // If this is an intentional close ensure we don't delay our next connection attempt.
                    this.Ks.reset() : r && r.code === R.RESOURCE_EXHAUSTED ? (
                    // Log the error. (Probably either 'quota exceeded' or 'max queue length reached'.)
                    k(r.toString()), k("Using maximum backoff delay to prevent overloading the backend."), 
                    this.Ks.gs()) : r && r.code === R.UNAUTHENTICATED && 
                    // "unauthenticated" error means the token was rejected. Try force refreshing it in case it
                    // just expired.
                    this.ir.A(), 
                    // Clean up the underlying stream because we are no longer interested in events.
                    null !== this.stream && (this.mr(), this.stream.close(), this.stream = null), 
                    // This state must be assigned before calling onClose() to allow the callback to
                    // inhibit backoff or otherwise manipulate the state in its non-started state.
                    this.state = t, [ 4 /*yield*/ , this.listener.Tr(r) ];

                  case 1:
                    // Cancel any outstanding timers (they're guaranteed not to execute).
                    // Notify the listener that the stream closed.
                    return e.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Can be overridden to perform additional cleanup before the stream is closed.
     * Calling super.tearDown() is not required.
     */
    t.prototype.mr = function() {}, t.prototype.auth = function() {
        var t = this;
        this.state = 1 /* Starting */;
        var e = this.Ar(this.rr), n = this.rr;
        // TODO(mikelehen): Just use dispatchIfNotClosed, but see TODO below.
                this.ir.getToken().then((function(e) {
            // Stream can be stopped while waiting for authentication.
            // TODO(mikelehen): We really should just use dispatchIfNotClosed
            // and let this dispatch onto the queue, but that opened a spec test can
            // of worms that I don't want to deal with in this PR.
            t.rr === n && 
            // Normally we'd have to schedule the callback on the AsyncQueue.
            // However, the following calls are safe to be called outside the
            // AsyncQueue since they don't chain asynchronous calls
            t.Ir(e);
        }), (function(n) {
            e((function() {
                var e = new S(R.UNKNOWN, "Fetching auth token failed: " + n.message);
                return t.Rr(e);
            }));
        }));
    }, t.prototype.Ir = function(t) {
        var e = this, n = this.Ar(this.rr);
        this.stream = this.Pr(t), this.stream.yr((function() {
            n((function() {
                return e.state = 2 /* Open */ , e.listener.yr();
            }));
        })), this.stream.Tr((function(t) {
            n((function() {
                return e.Rr(t);
            }));
        })), this.stream.onMessage((function(t) {
            n((function() {
                return e.onMessage(t);
            }));
        }));
    }, t.prototype.ar = function() {
        var t = this;
        this.state = 4 /* Backoff */ , this.Ks.vs((function() {
            return e(t, void 0, void 0, (function() {
                return n(this, (function(t) {
                    return this.state = 0 /* Initial */ , this.start(), [ 2 /*return*/ ];
                }));
            }));
        }));
    }, 
    // Visible for tests
    t.prototype.Rr = function(t) {
        // In theory the stream could close cleanly, however, in our current model
        // we never expect this to happen because if we stop a stream ourselves,
        // this callback will never be called. To prevent cases where we retry
        // without a backoff accidentally, we set the stream to error in all cases.
        return D("PersistentStream", "close with error: " + t), this.stream = null, this.close(3 /* Error */ , t);
    }, 
    /**
     * Returns a "dispatcher" function that dispatches operations onto the
     * AsyncQueue but only runs them if closeCount remains unchanged. This allows
     * us to turn auth / stream callbacks into no-ops if the stream is closed /
     * re-opened, etc.
     */
    t.prototype.Ar = function(t) {
        var e = this;
        return function(n) {
            e.Ts.Ms((function() {
                return e.rr === t ? n() : (D("PersistentStream", "stream callback skipped by getCloseGuardedDispatcher."), 
                Promise.resolve());
            }));
        };
    }, t;
}(), Sr = /** @class */ function(e) {
    function n(t, n, r, i, o) {
        var u = this;
        return (u = e.call(this, t, "listen_stream_connection_backoff" /* ListenStreamConnectionBackoff */ , "listen_stream_idle" /* ListenStreamIdle */ , n, r, o) || this).serializer = i, 
        u;
    }
    return t(n, e), n.prototype.Pr = function(t) {
        return this.sr.Vr("Listen", t);
    }, n.prototype.onMessage = function(t) {
        // A successful response means the stream is healthy
        this.Ks.reset();
        var e = function(t, e) {
            var n;
            if ("targetChange" in e) {
                e.targetChange;
                // proto3 default value is unset in JSON (undefined), so use 'NO_CHANGE'
                // if unset
                var r = function(t) {
                    return "NO_CHANGE" === t ? 0 /* NoChange */ : "ADD" === t ? 1 /* Added */ : "REMOVE" === t ? 2 /* Removed */ : "CURRENT" === t ? 3 /* Current */ : "RESET" === t ? 4 /* Reset */ : O();
                }(e.targetChange.targetChangeType || "NO_CHANGE"), i = e.targetChange.targetIds || [], o = function(t, e) {
                    return t.ne ? (P(void 0 === e || "string" == typeof e), ot.fromBase64String(e || "")) : (P(void 0 === e || e instanceof Uint8Array), 
                    ot.fromUint8Array(e || new Uint8Array));
                }(t, e.targetChange.resumeToken), u = e.targetChange.cause, s = u && function(t) {
                    var e = void 0 === t.code ? R.UNKNOWN : ft(t.code);
                    return new S(e, t.message || "");
                }(u);
                n = new Rt(r, i, o, s || null);
            } else if ("documentChange" in e) {
                e.documentChange;
                var a = e.documentChange;
                a.document, a.document.name, a.document.updateTime;
                var c = Ee(t, a.document.name), h = ge(a.document.updateTime), f = new wn({
                    mapValue: {
                        fields: a.document.fields
                    }
                }), l = new Nn(c, h, f, {}), p = a.targetIds || [], d = a.removedTargetIds || [];
                n = new Pt(p, d, l.key, l);
            } else if ("documentDelete" in e) {
                e.documentDelete;
                var v = e.documentDelete;
                v.document;
                var y = Ee(t, v.document), g = v.readTime ? ge(v.readTime) : Y.min(), m = new In(y, g), w = v.removedTargetIds || [];
                n = new Pt([], w, m.key, m);
            } else if ("documentRemove" in e) {
                e.documentRemove;
                var b = e.documentRemove;
                b.document;
                var E = Ee(t, b.document), T = b.removedTargetIds || [];
                n = new Pt([], T, E, null);
            } else {
                if (!("filter" in e)) return O();
                e.filter;
                var N = e.filter;
                N.targetId;
                var I = N.count || 0, A = new ct(I), C = N.targetId;
                n = new Lt(C, A);
            }
            return n;
        }(this.serializer, t), n = function(t) {
            // We have only reached a consistent snapshot for the entire stream if there
            // is a read_time set and it applies to all targets (i.e. the list of
            // targets is empty). The backend is guaranteed to send such responses.
            if (!("targetChange" in t)) return Y.min();
            var e = t.targetChange;
            return e.targetIds && e.targetIds.length ? Y.min() : e.readTime ? ge(e.readTime) : Y.min();
        }(t);
        return this.listener.pr(e, n);
    }, 
    /**
     * Registers interest in the results of the given target. If the target
     * includes a resumeToken it will be included in the request. Results that
     * affect the target will be streamed back as WatchChange messages that
     * reference the targetId.
     */
    n.prototype.gr = function(t) {
        var e = {};
        e.database = Ne(this.serializer), e.addTarget = function(t, e) {
            var n, r = e.target;
            return (n = it(r) ? {
                documents: De(t, r)
            } : {
                query: ke(t, r)
            }).targetId = e.targetId, e.resumeToken.at() > 0 ? n.resumeToken = ve(t, e.resumeToken) : e.ft.F(Y.min()) > 0 && (
            // TODO(wuandy): Consider removing above check because it is most likely true.
            // Right now, many tests depend on this behaviour though (leaving min() out
            // of serialization).
            n.readTime = de(t, e.ft.L())), n;
        }(this.serializer, t);
        var n = function(t, e) {
            var n = function(t, e) {
                switch (e) {
                  case 0 /* Listen */ :
                    return null;

                  case 1 /* ExistenceFilterMismatch */ :
                    return "existence-filter-mismatch";

                  case 2 /* LimboResolution */ :
                    return "limbo-document";

                  default:
                    return O();
                }
            }(0, e._t);
            return null == n ? null : {
                "goog-listen-tags": n
            };
        }(this.serializer, t);
        n && (e.labels = n), this.wr(e);
    }, 
    /**
     * Unregisters interest in the results of the target associated with the
     * given targetId.
     */
    n.prototype.vr = function(t) {
        var e = {};
        e.database = Ne(this.serializer), e.removeTarget = t, this.wr(e);
    }, n;
}(Rr), Ur = /** @class */ function(e) {
    function n(t, n, r, i, o) {
        var u = this;
        return (u = e.call(this, t, "write_stream_connection_backoff" /* WriteStreamConnectionBackoff */ , "write_stream_idle" /* WriteStreamIdle */ , n, r, o) || this).serializer = i, 
        u.br = !1, u;
    }
    return t(n, e), Object.defineProperty(n.prototype, "Cr", {
        /**
         * Tracks whether or not a handshake has been successfully exchanged and
         * the stream is ready to accept mutations.
         */
        get: function() {
            return this.br;
        },
        enumerable: !1,
        configurable: !0
    }), 
    // Override of PersistentStream.start
    n.prototype.start = function() {
        this.br = !1, this.lastStreamToken = void 0, e.prototype.start.call(this);
    }, n.prototype.mr = function() {
        this.br && this.Sr([]);
    }, n.prototype.Pr = function(t) {
        return this.sr.Vr("Write", t);
    }, n.prototype.onMessage = function(t) {
        if (
        // Always capture the last stream token.
        P(!!t.streamToken), this.lastStreamToken = t.streamToken, this.br) {
            // A successful first write response means the stream is healthy,
            // Note, that we could consider a successful handshake healthy, however,
            // the write itself might be causing an error we want to back off from.
            this.Ks.reset();
            var e = function(t, e) {
                return t && t.length > 0 ? (P(void 0 !== e), t.map((function(t) {
                    return function(t, e) {
                        // NOTE: Deletes don't have an updateTime.
                        var n = t.updateTime ? ge(t.updateTime) : ge(e);
                        n.isEqual(Y.min()) && (
                        // The Firestore Emulator currently returns an update time of 0 for
                        // deletes of non-existing documents (rather than null). This breaks the
                        // test "get deleted doc while offline with source=cache" as NoDocuments
                        // with version 0 are filtered by IndexedDb's RemoteDocumentCache.
                        // TODO(#2149): Remove this when Emulator is fixed
                        n = ge(e));
                        var r = null;
                        return t.transformResults && t.transformResults.length > 0 && (r = t.transformResults), 
                        new en(n, r);
                    }(t, e);
                }))) : [];
            }(t.writeResults, t.commitTime), n = ge(t.commitTime);
            return this.listener.Dr(n, e);
        }
        // The first response is always the handshake response
                return P(!t.writeResults || 0 === t.writeResults.length), this.br = !0, 
        this.listener.Nr();
    }, 
    /**
     * Sends an initial streamToken to the server, performing the handshake
     * required to make the StreamingWrite RPC work. Subsequent
     * calls should wait until onHandshakeComplete was called.
     */
    n.prototype.Fr = function() {
        // TODO(dimond): Support stream resumption. We intentionally do not set the
        // stream token on the handshake, ignoring any stream token we might have.
        var t = {};
        t.database = Ne(this.serializer), this.wr(t);
    }, 
    /** Sends a group of mutations to the Firestore backend to apply. */ n.prototype.Sr = function(t) {
        var e = this, n = {
            streamToken: this.lastStreamToken,
            writes: t.map((function(t) {
                return Ce(e.serializer, t);
            }))
        };
        this.wr(n);
    }, n;
}(Rr), qr = /** @class */ function(e) {
    function n(t, n, r) {
        var i = this;
        return (i = e.call(this) || this).credentials = t, i.sr = n, i.serializer = r, i.Or = !1, 
        i;
    }
    return t(n, e), n.prototype.Lr = function() {
        if (this.Or) throw new S(R.FAILED_PRECONDITION, "The client has already been terminated.");
    }, 
    /** Gets an auth token and invokes the provided RPC. */ n.prototype.$r = function(t, e, n) {
        var r = this;
        return this.Lr(), this.credentials.getToken().then((function(i) {
            return r.sr.$r(t, e, n, i);
        })).catch((function(t) {
            throw t.code === R.UNAUTHENTICATED && r.credentials.A(), t;
        }));
    }, 
    /** Gets an auth token and invokes the provided RPC with streamed results. */ n.prototype.kr = function(t, e, n) {
        var r = this;
        return this.Lr(), this.credentials.getToken().then((function(i) {
            return r.sr.kr(t, e, n, i);
        })).catch((function(t) {
            throw t.code === R.UNAUTHENTICATED && r.credentials.A(), t;
        }));
    }, n.prototype.terminate = function() {
        this.Or = !1;
    }, n;
}((function() {})), jr = /** @class */ function() {
    function t(t, e) {
        this.Ns = t, this.Mr = e, 
        /** The current OnlineState. */
        this.state = "Unknown" /* Unknown */ , 
        /**
             * A count of consecutive failures to open the stream. If it reaches the
             * maximum defined by MAX_WATCH_STREAM_FAILURES, we'll set the OnlineState to
             * Offline.
             */
        this.Ur = 0, 
        /**
             * A timer that elapses after ONLINE_STATE_TIMEOUT_MS, at which point we
             * transition from OnlineState.Unknown to OnlineState.Offline without waiting
             * for the stream to actually fail (MAX_WATCH_STREAM_FAILURES times).
             */
        this.qr = null, 
        /**
             * Whether the client should log a warning message if it fails to connect to
             * the backend (initially true, cleared after a successful stream, or if we've
             * logged the message already).
             */
        this.Br = !0
        /**
     * Called by RemoteStore when a watch stream is started (including on each
     * backoff attempt).
     *
     * If this is the first attempt, it sets the OnlineState to Unknown and starts
     * the onlineStateTimer.
     */;
    }
    return t.prototype.Qr = function() {
        var t = this;
        0 === this.Ur && (this.jr("Unknown" /* Unknown */), this.qr = this.Ns.Cs("online_state_timeout" /* OnlineStateTimeout */ , 1e4, (function() {
            return t.qr = null, t.Wr("Backend didn't respond within 10 seconds."), t.jr("Offline" /* Offline */), 
            Promise.resolve();
        })));
    }, 
    /**
     * Updates our OnlineState as appropriate after the watch stream reports a
     * failure. The first failure moves us to the 'Unknown' state. We then may
     * allow multiple failures (based on MAX_WATCH_STREAM_FAILURES) before we
     * actually transition to the 'Offline' state.
     */
    t.prototype.Gr = function(t) {
        "Online" /* Online */ === this.state ? this.jr("Unknown" /* Unknown */) : (this.Ur++, 
        this.Ur >= 1 && (this.Kr(), this.Wr("Connection failed 1 times. Most recent error: " + t.toString()), 
        this.jr("Offline" /* Offline */)));
    }, 
    /**
     * Explicitly sets the OnlineState to the specified state.
     *
     * Note that this resets our timers / failure counters, etc. used by our
     * Offline heuristics, so must not be used in place of
     * handleWatchStreamStart() and handleWatchStreamFailure().
     */
    t.prototype.set = function(t) {
        this.Kr(), this.Ur = 0, "Online" /* Online */ === t && (
        // We've connected to watch at least once. Don't warn the developer
        // about being offline going forward.
        this.Br = !1), this.jr(t);
    }, t.prototype.jr = function(t) {
        t !== this.state && (this.state = t, this.Mr(t));
    }, t.prototype.Wr = function(t) {
        var e = "Could not reach Cloud Firestore backend. " + t + "\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.";
        this.Br ? (k(e), this.Br = !1) : D("OnlineStateTracker", e);
    }, t.prototype.Kr = function() {
        null !== this.qr && (this.qr.cancel(), this.qr = null);
    }, t;
}(), Mr = function(
/**
     * The local store, used to fill the write pipeline with outbound mutations.
     */
t, 
/** The client-side proxy for interacting with the backend. */
r, i, o, u) {
    var s = this;
    this.zr = t, this.Hr = r, this.Ns = i, this.Yr = {}, 
    /**
             * A list of up to MAX_PENDING_WRITES writes that we have fetched from the
             * LocalStore via fillWritePipeline() and have or will send to the write
             * stream.
             *
             * Whenever writePipeline.length > 0 the RemoteStore will attempt to start or
             * restart the write stream. When the stream is established the writes in the
             * pipeline will be sent in order.
             *
             * Writes remain in writePipeline until they are acknowledged by the backend
             * and thus will automatically be re-sent if the stream is interrupted /
             * restarted before they're acknowledged.
             *
             * Write responses from the backend are linked to their originating request
             * purely based on order, and so we can just shift() writes from the front of
             * the writePipeline as we receive responses.
             */
    this.Jr = [], 
    /**
             * A mapping of watched targets that the client cares about tracking and the
             * user has explicitly called a 'listen' for this target.
             *
             * These targets may or may not have been sent to or acknowledged by the
             * server. On re-establishing the listen stream, these targets should be sent
             * to the server. The targets removed with unlistens are removed eagerly
             * without waiting for confirmation from the listen stream.
             */
    this.Xr = new Map, 
    /**
             * A set of reasons for why the RemoteStore may be offline. If empty, the
             * RemoteStore may start its network connections.
             */
    this.Zr = new Set, 
    /**
             * Event handlers that get called when the network is disabled or enabled.
             *
             * PORTING NOTE: These functions are used on the Web client to create the
             * underlying streams (to support tree-shakeable streams). On Android and iOS,
             * the streams are created during construction of RemoteStore.
             */
    this.no = [], this.eo = u, this.eo.so((function(t) {
        i.Ms((function() {
            return e(s, void 0, void 0, (function() {
                return n(this, (function(t) {
                    switch (t.label) {
                      case 0:
                        return Qr(this) ? (D("RemoteStore", "Restarting streams for network reachability change."), 
                        [ 4 /*yield*/ , function(t) {
                            return e(this, void 0, void 0, (function() {
                                var e;
                                return n(this, (function(n) {
                                    switch (n.label) {
                                      case 0:
                                        return (e = L(t)).Zr.add(4 /* ConnectivityChange */), [ 4 /*yield*/ , Fr(e) ];

                                      case 1:
                                        return n.sent(), e.io.set("Unknown" /* Unknown */), e.Zr.delete(4 /* ConnectivityChange */), 
                                        [ 4 /*yield*/ , xr(e) ];

                                      case 2:
                                        return n.sent(), [ 2 /*return*/ ];
                                    }
                                }));
                            }));
                        }(this) ]) : [ 3 /*break*/ , 2 ];

                      case 1:
                        t.sent(), t.label = 2;

                      case 2:
                        return [ 2 /*return*/ ];
                    }
                }));
            }));
        }));
    })), this.io = new jr(i, o);
};

/**
 * A PersistentStream that implements the Listen RPC.
 *
 * Once the Listen stream has called the onOpen() listener, any number of
 * listen() and unlisten() calls can be made to control what changes will be
 * sent from the server for ListenResponses.
 */ function xr(t) {
    return e(this, void 0, void 0, (function() {
        var e, r;
        return n(this, (function(n) {
            switch (n.label) {
              case 0:
                if (!Qr(t)) return [ 3 /*break*/ , 4 ];
                e = 0, r = t.no, n.label = 1;

              case 1:
                return e < r.length ? [ 4 /*yield*/ , (0, r[e])(/* enabled= */ !0) ] : [ 3 /*break*/ , 4 ];

              case 2:
                n.sent(), n.label = 3;

              case 3:
                return e++, [ 3 /*break*/ , 1 ];

              case 4:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * Temporarily disables the network. The network can be re-enabled using
 * enableNetwork().
 */ function Fr(t) {
    return e(this, void 0, void 0, (function() {
        var e, r;
        return n(this, (function(n) {
            switch (n.label) {
              case 0:
                e = 0, r = t.no, n.label = 1;

              case 1:
                return e < r.length ? [ 4 /*yield*/ , (0, r[e])(/* enabled= */ !1) ] : [ 3 /*break*/ , 4 ];

              case 2:
                n.sent(), n.label = 3;

              case 3:
                return e++, [ 3 /*break*/ , 1 ];

              case 4:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * Starts new listen for the given target. Uses resume token if provided. It
 * is a no-op if the target of given `TargetData` is already being listened to.
 */ function zr(t, e) {
    var n = L(t);
    n.Xr.has(e.targetId) || (
    // Mark this as something the client is currently listening for.
    n.Xr.set(e.targetId, e), Hr(n) ? 
    // The listen will be sent in onWatchStreamOpen
    Yr(n) : ai(n).hr() && Br(n, e));
}

/**
 * Removes the listen from server. It is a no-op if the given target id is
 * not being listened to.
 */ function Gr(t, e) {
    var n = L(t), r = ai(n);
    n.Xr.delete(e), r.hr() && Wr(n, e), 0 === n.Xr.size && (r.hr() ? r._r() : Qr(n) && 
    // Revert to OnlineState.Unknown if the watch stream is not open and we
    // have no listeners, since without any listens to send we cannot
    // confirm if the stream is healthy and upgrade to OnlineState.Online.
    n.io.set("Unknown" /* Unknown */));
}

/**
 * We need to increment the the expected number of pending responses we're due
 * from watch so we wait for the ack to process any messages from this target.
 */ function Br(t, e) {
    t.ro.Dn(e.targetId), ai(t).gr(e)
    /**
 * We need to increment the expected number of pending responses we're due
 * from watch so we wait for the removal on the server before we process any
 * messages from this target.
 */;
}

function Wr(t, e) {
    t.ro.Dn(e), ai(t).vr(e);
}

function Yr(t) {
    t.ro = new Ut({
        Zn: function(e) {
            return t.Yr.Zn(e);
        },
        te: function(e) {
            return t.Xr.get(e) || null;
        }
    }), ai(t).start(), t.io.Qr()
    /**
 * Returns whether the watch stream should be started because it's necessary
 * and has not yet been started.
 */;
}

function Hr(t) {
    return Qr(t) && !ai(t).cr() && t.Xr.size > 0;
}

function Qr(t) {
    return 0 === L(t).Zr.size;
}

function Xr(t) {
    t.ro = void 0;
}

function Kr(t) {
    return e(this, void 0, void 0, (function() {
        return n(this, (function(e) {
            return t.Xr.forEach((function(e, n) {
                Br(t, e);
            })), [ 2 /*return*/ ];
        }));
    }));
}

function Jr(t, r) {
    return e(this, void 0, void 0, (function() {
        return n(this, (function(e) {
            return Xr(t), 
            // If we still need the watch stream, retry the connection.
            Hr(t) ? (t.io.Gr(r), Yr(t)) : 
            // No need to restart watch stream because there are no active targets.
            // The online state is set to unknown because there is no active attempt
            // at establishing a connection
            t.io.set("Unknown" /* Unknown */), [ 2 /*return*/ ];
        }));
    }));
}

function $r(t, r, i) {
    return e(this, void 0, void 0, (function() {
        var o, u, s;
        return n(this, (function(a) {
            switch (a.label) {
              case 0:
                if (t.io.set("Online" /* Online */), !(r instanceof Rt && 2 /* Removed */ === r.state && r.cause)) 
                // Mark the client as online since we got a message from the server
                return [ 3 /*break*/ , 6 ];
                a.label = 1;

              case 1:
                return a.trys.push([ 1, 3, , 5 ]), [ 4 /*yield*/ , 
                /** Handles an error on a target */
                function(t, r) {
                    return e(this, void 0, void 0, (function() {
                        var e, i, o, u;
                        return n(this, (function(n) {
                            switch (n.label) {
                              case 0:
                                e = r.cause, i = 0, o = r.targetIds, n.label = 1;

                              case 1:
                                return i < o.length ? (u = o[i], t.Xr.has(u) ? [ 4 /*yield*/ , t.Yr.oo(u, e) ] : [ 3 /*break*/ , 3 ]) : [ 3 /*break*/ , 5 ];

                              case 2:
                                n.sent(), t.Xr.delete(u), t.ro.removeTarget(u), n.label = 3;

                              case 3:
                                n.label = 4;

                              case 4:
                                return i++, [ 3 /*break*/ , 1 ];

                              case 5:
                                return [ 2 /*return*/ ];
                            }
                        }));
                    }));
                }(t, r) ];

              case 2:
                return a.sent(), [ 3 /*break*/ , 5 ];

              case 3:
                return o = a.sent(), D("RemoteStore", "Failed to remove targets %s: %s ", r.targetIds.join(","), o), 
                [ 4 /*yield*/ , Zr(t, o) ];

              case 4:
                return a.sent(), [ 3 /*break*/ , 5 ];

              case 5:
                return [ 3 /*break*/ , 13 ];

              case 6:
                if (r instanceof Pt ? t.ro.Mn(r) : r instanceof Lt ? t.ro.Kn(r) : t.ro.Bn(r), i.isEqual(Y.min())) return [ 3 /*break*/ , 13 ];
                a.label = 7;

              case 7:
                return a.trys.push([ 7, 11, , 13 ]), [ 4 /*yield*/ , kr(t.zr) ];

              case 8:
                return u = a.sent(), i.F(u) >= 0 ? [ 4 /*yield*/ , 
                /**
                 * Takes a batch of changes from the Datastore, repackages them as a
                 * RemoteEvent, and passes that on to the listener, which is typically the
                 * SyncEngine.
                 */
                function(t, e) {
                    var n = t.ro.Yn(e);
                    // Update in-memory resume tokens. LocalStore will update the
                    // persistent view of these when applying the completed RemoteEvent.
                                        return n.on.forEach((function(n, r) {
                        if (n.resumeToken.at() > 0) {
                            var i = t.Xr.get(r);
                            // A watched target might have been removed already.
                                                        i && t.Xr.set(r, i.wt(n.resumeToken, e));
                        }
                    })), 
                    // Re-establish listens for the targets that have been invalidated by
                    // existence filter mismatches.
                    n.un.forEach((function(e) {
                        var n = t.Xr.get(e);
                        if (n) {
                            // Clear the resume token for the target, since we're in a known mismatch
                            // state.
                            t.Xr.set(e, n.wt(ot.lt, n.ft)), 
                            // Cause a hard reset by unwatching and rewatching immediately, but
                            // deliberately don't send a resume token so that we get a full update.
                            Wr(t, e);
                            // Mark the target we send as being on behalf of an existence filter
                            // mismatch, but don't actually retain that in listenTargets. This ensures
                            // that we flag the first re-listen this way without impacting future
                            // listens of this target (that might happen e.g. on reconnect).
                            var r = new at(n.target, e, 1 /* ExistenceFilterMismatch */ , n.sequenceNumber);
                            Br(t, r);
                        }
                    })), t.Yr.uo(n);
                }(t, i) ] : [ 3 /*break*/ , 10 ];

                // We have received a target change with a global snapshot if the snapshot
                // version is not equal to SnapshotVersion.min().
                              case 9:
                // We have received a target change with a global snapshot if the snapshot
                // version is not equal to SnapshotVersion.min().
                a.sent(), a.label = 10;

              case 10:
                return [ 3 /*break*/ , 13 ];

              case 11:
                return D("RemoteStore", "Failed to raise snapshot:", s = a.sent()), [ 4 /*yield*/ , Zr(t, s) ];

              case 12:
                return a.sent(), [ 3 /*break*/ , 13 ];

              case 13:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * Recovery logic for IndexedDB errors that takes the network offline until
 * `op` succeeds. Retries are scheduled with backoff using
 * `enqueueRetryable()`. If `op()` is not provided, IndexedDB access is
 * validated via a generic operation.
 *
 * The returned Promise is resolved once the network is disabled and before
 * any retry attempt.
 */ function Zr(t, r, i) {
    return e(this, void 0, void 0, (function() {
        var o = this;
        return n(this, (function(u) {
            switch (u.label) {
              case 0:
                if (!dr(r)) throw r;
                // Disable network and raise offline snapshots
                return t.Zr.add(1 /* IndexedDbFailed */), [ 4 /*yield*/ , Fr(t) ];

              case 1:
                // Disable network and raise offline snapshots
                return u.sent(), t.io.set("Offline" /* Offline */), i || (
                // Use a simple read operation to determine if IndexedDB recovered.
                // Ideally, we would expose a health check directly on SimpleDb, but
                // RemoteStore only has access to persistence through LocalStore.
                i = function() {
                    return kr(t.zr);
                }), 
                // Probe IndexedDB periodically and re-enable network
                t.Ns.ti((function() {
                    return e(o, void 0, void 0, (function() {
                        return n(this, (function(e) {
                            switch (e.label) {
                              case 0:
                                return D("RemoteStore", "Retrying IndexedDB access"), [ 4 /*yield*/ , i() ];

                              case 1:
                                return e.sent(), t.Zr.delete(1 /* IndexedDbFailed */), [ 4 /*yield*/ , xr(t) ];

                              case 2:
                                return e.sent(), [ 2 /*return*/ ];
                            }
                        }));
                    }));
                })), [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * Executes `op`. If `op` fails, takes the network offline until `op`
 * succeeds. Returns after the first attempt.
 */ function ti(t, e) {
    return e().catch((function(n) {
        return Zr(t, n, e);
    }));
}

function ei(t) {
    return e(this, void 0, void 0, (function() {
        var e, r, i, o, u;
        return n(this, (function(n) {
            switch (n.label) {
              case 0:
                e = L(t), r = ci(e), i = e.Jr.length > 0 ? e.Jr[e.Jr.length - 1].batchId : -1, n.label = 1;

              case 1:
                if (!
                /**
 * Returns true if we can add to the write pipeline (i.e. the network is
 * enabled and the write pipeline is not full).
 */
                function(t) {
                    return Qr(t) && t.Jr.length < 10;
                }
                /**
 * Queues additional writes to be sent to the write stream, sending them
 * immediately if the write stream is established.
 */ (e)) return [ 3 /*break*/ , 7 ];
                n.label = 2;

              case 2:
                return n.trys.push([ 2, 4, , 6 ]), [ 4 /*yield*/ , _r(e.zr, i) ];

              case 3:
                return null === (o = n.sent()) ? (0 === e.Jr.length && r._r(), [ 3 /*break*/ , 7 ]) : (i = o.batchId, 
                function(t, e) {
                    t.Jr.push(e);
                    var n = ci(t);
                    n.hr() && n.Cr && n.Sr(e.mutations);
                }(e, o), [ 3 /*break*/ , 6 ]);

              case 4:
                return u = n.sent(), [ 4 /*yield*/ , Zr(e, u) ];

              case 5:
                return n.sent(), [ 3 /*break*/ , 6 ];

              case 6:
                return [ 3 /*break*/ , 1 ];

              case 7:
                return ni(e) && ri(e), [ 2 /*return*/ ];
            }
        }));
    }));
}

function ni(t) {
    return Qr(t) && !ci(t).cr() && t.Jr.length > 0;
}

function ri(t) {
    ci(t).start();
}

function ii(t) {
    return e(this, void 0, void 0, (function() {
        return n(this, (function(e) {
            return ci(t).Fr(), [ 2 /*return*/ ];
        }));
    }));
}

function oi(t) {
    return e(this, void 0, void 0, (function() {
        var e, r, i, o;
        return n(this, (function(n) {
            // Send the write pipeline now that the stream is established.
            for (e = ci(t), r = 0, i = t.Jr; r < i.length; r++) o = i[r], e.Sr(o.mutations);
            return [ 2 /*return*/ ];
        }));
    }));
}

function ui(t, r, i) {
    return e(this, void 0, void 0, (function() {
        var e, o;
        return n(this, (function(n) {
            switch (n.label) {
              case 0:
                return e = t.Jr.shift(), o = ir.from(e, r, i), [ 4 /*yield*/ , ti(t, (function() {
                    return t.Yr.co(o);
                })) ];

              case 1:
                // It's possible that with the completion of this mutation another
                // slot has freed up.
                return n.sent(), [ 4 /*yield*/ , ei(t) ];

              case 2:
                // It's possible that with the completion of this mutation another
                // slot has freed up.
                return n.sent(), [ 2 /*return*/ ];
            }
        }));
    }));
}

function si(t, r) {
    return e(this, void 0, void 0, (function() {
        return n(this, (function(i) {
            switch (i.label) {
              case 0:
                return r && ci(t).Cr ? [ 4 /*yield*/ , function(t, r) {
                    return e(this, void 0, void 0, (function() {
                        var e, i;
                        return n(this, (function(n) {
                            switch (n.label) {
                              case 0:
                                return ht(i = r.code) && i !== R.ABORTED ? (e = t.Jr.shift(), 
                                // In this case it's also unlikely that the server itself is melting
                                // down -- this was just a bad request so inhibit backoff on the next
                                // restart.
                                ci(t).lr(), [ 4 /*yield*/ , ti(t, (function() {
                                    return t.Yr.ho(e.batchId, r);
                                })) ]) : [ 3 /*break*/ , 3 ];

                              case 1:
                                // It's possible that with the completion of this mutation
                                // another slot has freed up.
                                return n.sent(), [ 4 /*yield*/ , ei(t) ];

                              case 2:
                                // In this case it's also unlikely that the server itself is melting
                                // down -- this was just a bad request so inhibit backoff on the next
                                // restart.
                                // It's possible that with the completion of this mutation
                                // another slot has freed up.
                                n.sent(), n.label = 3;

                              case 3:
                                return [ 2 /*return*/ ];
                            }
                        }));
                    }));
                }(t, r) ] : [ 3 /*break*/ , 2 ];

                // This error affects the actual write.
                              case 1:
                // This error affects the actual write.
                i.sent(), i.label = 2;

              case 2:
                // If the write stream closed after the write handshake completes, a write
                // operation failed and we fail the pending operation.
                // The write stream might have been started by refilling the write
                // pipeline for failed writes
                return ni(t) && ri(t), [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * If not yet initialized, registers the WatchStream and its network state
 * callback with `remoteStoreImpl`. Returns the existing stream if one is
 * already available.
 *
 * PORTING NOTE: On iOS and Android, the WatchStream gets registered on startup.
 * This is not done on Web to allow it to be tree-shaken.
 */ function ai(t) {
    var r = this;
    return t.ao || (
    // Create stream (but note that it is not started yet).
    t.ao = function(t, e, n) {
        var r = L(t);
        return r.Lr(), new Sr(e, r.sr, r.credentials, r.serializer, n);
    }(t.Hr, t.Ns, {
        yr: Kr.bind(null, t),
        Tr: Jr.bind(null, t),
        pr: $r.bind(null, t)
    }), t.no.push((function(i) {
        return e(r, void 0, void 0, (function() {
            return n(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return i ? (t.ao.lr(), Hr(t) ? Yr(t) : t.io.set("Unknown" /* Unknown */), [ 3 /*break*/ , 3 ]) : [ 3 /*break*/ , 1 ];

                  case 1:
                    return [ 4 /*yield*/ , t.ao.stop() ];

                  case 2:
                    e.sent(), Xr(t), e.label = 3;

                  case 3:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }))), t.ao
    /**
 * If not yet initialized, registers the WriteStream and its network state
 * callback with `remoteStoreImpl`. Returns the existing stream if one is
 * already available.
 *
 * PORTING NOTE: On iOS and Android, the WriteStream gets registered on startup.
 * This is not done on Web to allow it to be tree-shaken.
 */;
}

function ci(t) {
    var r = this;
    return t.lo || (
    // Create stream (but note that it is not started yet).
    t.lo = function(t, e, n) {
        var r = L(t);
        return r.Lr(), new Ur(e, r.sr, r.credentials, r.serializer, n);
    }(t.Hr, t.Ns, {
        yr: ii.bind(null, t),
        Tr: si.bind(null, t),
        Nr: oi.bind(null, t),
        Dr: ui.bind(null, t)
    }), t.no.push((function(i) {
        return e(r, void 0, void 0, (function() {
            return n(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return i ? (t.lo.lr(), [ 4 /*yield*/ , ei(t) ]) : [ 3 /*break*/ , 2 ];

                  case 1:
                    // This will start the write stream if necessary.
                    return e.sent(), [ 3 /*break*/ , 4 ];

                  case 2:
                    return [ 4 /*yield*/ , t.lo.stop() ];

                  case 3:
                    e.sent(), t.Jr.length > 0 && (D("RemoteStore", "Stopping write stream with " + t.Jr.length + " pending writes"), 
                    t.Jr = []), e.label = 4;

                  case 4:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }))), t.lo
    /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
    /**
 * Holds the listeners and the last received ViewSnapshot for a query being
 * tracked by EventManager.
 */;
}

var hi = function() {
    this._o = void 0, this.listeners = [];
}, fi = function() {
    this.queries = new or((function(t) {
        return qn(t);
    }), Un), this.onlineState = "Unknown" /* Unknown */ , this.fo = new Set;
};

function li(t, r) {
    return e(this, void 0, void 0, (function() {
        var e, i, o, u, s, a, c;
        return n(this, (function(n) {
            switch (n.label) {
              case 0:
                if (e = L(t), i = r.query, o = !1, (u = e.queries.get(i)) || (o = !0, u = new hi), 
                !o) return [ 3 /*break*/ , 4 ];
                n.label = 1;

              case 1:
                return n.trys.push([ 1, 3, , 4 ]), s = u, [ 4 /*yield*/ , e.wo(i) ];

              case 2:
                return s._o = n.sent(), [ 3 /*break*/ , 4 ];

              case 3:
                return a = n.sent(), c = mr(a, "Initialization of query '" + jn(r.query) + "' failed"), 
                [ 2 /*return*/ , void r.onError(c) ];

              case 4:
                return e.queries.set(i, u), u.listeners.push(r), 
                // Run global snapshot listeners if a consistent snapshot has been emitted.
                r.Eo(e.onlineState), u._o && r.mo(u._o) && yi(e), [ 2 /*return*/ ];
            }
        }));
    }));
}

function pi(t, r) {
    return e(this, void 0, void 0, (function() {
        var e, i, o, u, s;
        return n(this, (function(n) {
            return e = L(t), i = r.query, o = !1, (u = e.queries.get(i)) && (s = u.listeners.indexOf(r)) >= 0 && (u.listeners.splice(s, 1), 
            o = 0 === u.listeners.length), o ? [ 2 /*return*/ , (e.queries.delete(i), e.To(i)) ] : [ 2 /*return*/ ];
        }));
    }));
}

function di(t, e) {
    for (var n = L(t), r = !1, i = 0, o = e; i < o.length; i++) {
        var u = o[i], s = u.query, a = n.queries.get(s);
        if (a) {
            for (var c = 0, h = a.listeners; c < h.length; c++) {
                h[c].mo(u) && (r = !0);
            }
            a._o = u;
        }
    }
    r && yi(n);
}

function vi(t, e, n) {
    var r = L(t), i = r.queries.get(e);
    if (i) for (var o = 0, u = i.listeners; o < u.length; o++) {
        u[o].onError(n);
    }
    // Remove all listeners. NOTE: We don't need to call syncEngine.unlisten()
    // after an error.
        r.queries.delete(e);
}

// Call all global snapshot listeners that have been set.
function yi(t) {
    t.fo.forEach((function(t) {
        t.next();
    }));
}

/**
 * QueryListener takes a series of internal view snapshots and determines
 * when to raise the event.
 *
 * It uses an Observer to dispatch events.
 */ var gi = /** @class */ function() {
    function t(t, e, n) {
        this.query = t, this.Ao = e, 
        /**
             * Initial snapshots (e.g. from cache) may not be propagated to the wrapped
             * observer. This flag is set to true once we've actually raised an event.
             */
        this.Io = !1, this.Ro = null, this.onlineState = "Unknown" /* Unknown */ , this.options = n || {}
        /**
     * Applies the new ViewSnapshot to this listener, raising a user-facing event
     * if applicable (depending on what changed, whether the user has opted into
     * metadata-only changes, etc.). Returns true if a user-facing event was
     * indeed raised.
     */;
    }
    return t.prototype.mo = function(t) {
        if (!this.options.includeMetadataChanges) {
            for (
            // Remove the metadata only changes.
            var e = [], n = 0, r = t.docChanges; n < r.length; n++) {
                var i = r[n];
                3 /* Metadata */ !== i.type && e.push(i);
            }
            t = new Vt(t.query, t.docs, t.tn, e, t.nn, t.fromCache, t.en, 
            /* excludesMetadataChanges= */ !0);
        }
        var o = !1;
        return this.Io ? this.Po(t) && (this.Ao.next(t), o = !0) : this.yo(t, this.onlineState) && (this.Vo(t), 
        o = !0), this.Ro = t, o;
    }, t.prototype.onError = function(t) {
        this.Ao.error(t);
    }, 
    /** Returns whether a snapshot was raised. */ t.prototype.Eo = function(t) {
        this.onlineState = t;
        var e = !1;
        return this.Ro && !this.Io && this.yo(this.Ro, t) && (this.Vo(this.Ro), e = !0), 
        e;
    }, t.prototype.yo = function(t, e) {
        // Always raise the first event when we're synced
        if (!t.fromCache) return !0;
        // NOTE: We consider OnlineState.Unknown as online (it should become Offline
        // or Online if we wait long enough).
                var n = "Offline" /* Offline */ !== e;
        // Don't raise the event if we're online, aren't synced yet (checked
        // above) and are waiting for a sync.
                return !(this.options.po && n || t.docs.W() && "Offline" /* Offline */ !== e);
        // Raise data from cache if we have any documents or we are offline
        }, t.prototype.Po = function(t) {
        // We don't need to handle includeDocumentMetadataChanges here because
        // the Metadata only changes have already been stripped out if needed.
        // At this point the only changes we will see are the ones we should
        // propagate.
        if (t.docChanges.length > 0) return !0;
        var e = this.Ro && this.Ro.hasPendingWrites !== t.hasPendingWrites;
        return !(!t.en && !e) && !0 === this.options.includeMetadataChanges;
        // Generally we should have hit one of the cases above, but it's possible
        // to get here if there were only metadata docChanges and they got
        // stripped out.
        }, t.prototype.Vo = function(t) {
        t = Vt.rn(t.query, t.docs, t.nn, t.fromCache), this.Io = !0, this.Ao.next(t);
    }, t;
}(), mi = /** @class */ function() {
    function t() {
        // A set of outstanding references to a document sorted by key.
        this.vo = new vt(wi.bo), 
        // A set of outstanding references to a document sorted by target id.
        this.Co = new vt(wi.So)
        /** Returns true if the reference set contains no references. */;
    }
    return t.prototype.W = function() {
        return this.vo.W();
    }, 
    /** Adds a reference to the given document key for the given ID. */ t.prototype.Do = function(t, e) {
        var n = new wi(t, e);
        this.vo = this.vo.add(n), this.Co = this.Co.add(n);
    }, 
    /** Add references to the given document keys for the given ID. */ t.prototype.No = function(t, e) {
        var n = this;
        t.forEach((function(t) {
            return n.Do(t, e);
        }));
    }, 
    /**
     * Removes a reference to the given document key for the given
     * ID.
     */
    t.prototype.xo = function(t, e) {
        this.Fo(new wi(t, e));
    }, t.prototype.Oo = function(t, e) {
        var n = this;
        t.forEach((function(t) {
            return n.xo(t, e);
        }));
    }, 
    /**
     * Clears all references with a given ID. Calls removeRef() for each key
     * removed.
     */
    t.prototype.Lo = function(t) {
        var e = this, n = new J(new Q([])), r = new wi(n, t), i = new wi(n, t + 1), o = [];
        return this.Co.jt([ r, i ], (function(t) {
            e.Fo(t), o.push(t.key);
        })), o;
    }, t.prototype.$o = function() {
        var t = this;
        this.vo.forEach((function(e) {
            return t.Fo(e);
        }));
    }, t.prototype.Fo = function(t) {
        this.vo = this.vo.delete(t), this.Co = this.Co.delete(t);
    }, t.prototype.ko = function(t) {
        var e = new J(new Q([])), n = new wi(e, t), r = new wi(e, t + 1), i = It();
        return this.Co.jt([ n, r ], (function(t) {
            i = i.add(t.key);
        })), i;
    }, t.prototype.Mo = function(t) {
        var e = new wi(t, 0), n = this.vo.Gt(e);
        return null !== n && t.isEqual(n.key);
    }, t;
}(), wi = /** @class */ function() {
    function t(t, e) {
        this.key = t, this.Uo = e
        /** Compare by key then by ID */;
    }
    return t.bo = function(t, e) {
        return J.k(t.key, e.key) || G(t.Uo, e.Uo);
    }, 
    /** Compare by ID then by key */ t.So = function(t, e) {
        return G(t.Uo, e.Uo) || J.k(t.key, e.key);
    }, t;
}(), bi = /** @class */ function() {
    function t() {
        this.activeTargetIds = Ct();
    }
    return t.prototype.qo = function(t) {
        this.activeTargetIds = this.activeTargetIds.add(t);
    }, t.prototype.Bo = function(t) {
        this.activeTargetIds = this.activeTargetIds.delete(t);
    }, 
    /**
     * Converts this entry into a JSON-encoded format we can use for WebStorage.
     * Does not encode `clientId` as it is part of the key in WebStorage.
     */
    t.prototype.Qo = function() {
        var t = {
            activeTargetIds: this.activeTargetIds.H(),
            updateTimeMs: Date.now()
        };
        return JSON.stringify(t);
    }, t;
}(), Ei = /** @class */ function() {
    function t() {
        this.jo = new bi, this.Wo = {}, this.Mr = null, this._s = null;
    }
    return t.prototype.Go = function(t) {
        // No op.
    }, t.prototype.Ko = function(t, e, n) {
        // No op.
    }, t.prototype.zo = function(t) {
        return this.jo.qo(t), this.Wo[t] || "not-current";
    }, t.prototype.Ho = function(t, e, n) {
        this.Wo[t] = e;
    }, t.prototype.Yo = function(t) {
        this.jo.Bo(t);
    }, t.prototype.Jo = function(t) {
        return this.jo.activeTargetIds.has(t);
    }, t.prototype.Xo = function(t) {
        delete this.Wo[t];
    }, t.prototype.Zo = function() {
        return this.jo.activeTargetIds;
    }, t.prototype.tu = function(t) {
        return this.jo.activeTargetIds.has(t);
    }, t.prototype.start = function() {
        return this.jo = new bi, Promise.resolve();
    }, t.prototype.nu = function(t, e, n) {
        // No op.
    }, t.prototype.eu = function(t) {
        // No op.
    }, t.prototype.su = function() {}, t.prototype.ws = function(t) {}, t.prototype.iu = function() {
        // No op.
    }, t;
}(), Ti = function(t) {
    this.key = t;
}, Ni = function(t) {
    this.key = t;
}, Ii = /** @class */ function() {
    function t(t, 
    /** Documents included in the remote target */
    e) {
        this.query = t, this.ru = e, this.ou = null, 
        /**
             * A flag whether the view is current with the backend. A view is considered
             * current after it has seen the current flag from the backend and did not
             * lose consistency within the watch stream (e.g. because of an existence
             * filter mismatch).
             */
        this._n = !1, 
        /** Documents in the view but not in the remote target */
        this.uu = It(), 
        /** Document Keys that have local changes */
        this.nn = It(), this.cu = xn(t), this.hu = new Dt(this.cu);
    }
    return Object.defineProperty(t.prototype, "au", {
        /**
         * The set of remote documents that the server has told us belongs to the target associated with
         * this view.
         */
        get: function() {
            return this.ru;
        },
        enumerable: !1,
        configurable: !0
    }), 
    /**
     * Iterates over a set of doc changes, applies the query limit, and computes
     * what the new results should be, what the changes were, and whether we may
     * need to go back to the local cache for more results. Does not make any
     * changes to the view.
     * @param docChanges - The doc changes to apply to this view.
     * @param previousChanges - If this is being called with a refill, then start
     *        with this set of docs and changes instead of the current view.
     * @returns a new set of docs, changes, and refill flag.
     */
    t.prototype.lu = function(t, e) {
        var n = this, r = e ? e._u : new kt, i = e ? e.hu : this.hu, o = e ? e.nn : this.nn, u = i, s = !1, a = kn(this.query) && i.size === this.query.limit ? i.last() : null, c = Vn(this.query) && i.size === this.query.limit ? i.first() : null;
        // Drop documents out to meet limit/limitToLast requirement.
        if (t.Pt((function(t, e) {
            var h = i.get(t), f = e instanceof Nn ? e : null;
            f && (f = Mn(n.query, f) ? f : null);
            var l = !!h && n.nn.has(h.key), p = !!f && (f.he || 
            // We only consider committed mutations for documents that were
            // mutated during the lifetime of the view.
            n.nn.has(f.key) && f.hasCommittedMutations), d = !1;
            // Calculate change
            h && f ? h.data().isEqual(f.data()) ? l !== p && (r.track({
                type: 3 /* Metadata */ ,
                doc: f
            }), d = !0) : n.fu(h, f) || (r.track({
                type: 2 /* Modified */ ,
                doc: f
            }), d = !0, (a && n.cu(f, a) > 0 || c && n.cu(f, c) < 0) && (
            // This doc moved from inside the limit to outside the limit.
            // That means there may be some other doc in the local cache
            // that should be included instead.
            s = !0)) : !h && f ? (r.track({
                type: 0 /* Added */ ,
                doc: f
            }), d = !0) : h && !f && (r.track({
                type: 1 /* Removed */ ,
                doc: h
            }), d = !0, (a || c) && (
            // A doc was removed from a full limit query. We'll need to
            // requery from the local cache to see if we know about some other
            // doc that should be in the results.
            s = !0)), d && (f ? (u = u.add(f), o = p ? o.add(t) : o.delete(t)) : (u = u.delete(t), 
            o = o.delete(t)));
        })), kn(this.query) || Vn(this.query)) for (;u.size > this.query.limit; ) {
            var h = kn(this.query) ? u.last() : u.first();
            u = u.delete(h.key), o = o.delete(h.key), r.track({
                type: 1 /* Removed */ ,
                doc: h
            });
        }
        return {
            hu: u,
            _u: r,
            _i: s,
            nn: o
        };
    }, t.prototype.fu = function(t, e) {
        // We suppress the initial change event for documents that were modified as
        // part of a write acknowledgment (e.g. when the value of a server transform
        // is applied) as Watch will send us the same document again.
        // By suppressing the event, we only raise two user visible events (one with
        // `hasPendingWrites` and the final state of the document) instead of three
        // (one with `hasPendingWrites`, the modified document with
        // `hasPendingWrites` and the final state of the document).
        return t.he && e.hasCommittedMutations && !e.he;
    }, 
    /**
     * Updates the view with the given ViewDocumentChanges and optionally updates
     * limbo docs and sync state from the provided target change.
     * @param docChanges - The set of changes to make to the view's docs.
     * @param updateLimboDocuments - Whether to update limbo documents based on
     *        this change.
     * @param targetChange - A target change to apply for computing limbo docs and
     *        sync state.
     * @returns A new ViewChange with the given docs, changes, and sync state.
     */
    // PORTING NOTE: The iOS/Android clients always compute limbo document changes.
    t.prototype.du = function(t, e, n) {
        var r = this, i = this.hu;
        this.hu = t.hu, this.nn = t.nn;
        // Sort changes based on type and query comparator
        var o = t._u.Zt();
        o.sort((function(t, e) {
            return function(t, e) {
                var n = function(t) {
                    switch (t) {
                      case 0 /* Added */ :
                        return 1;

                      case 2 /* Modified */ :
                      case 3 /* Metadata */ :
                        // A metadata change is converted to a modified change at the public
                        // api layer.  Since we sort by document key and then change type,
                        // metadata and modified changes must be sorted equivalently.
                        return 2;

                      case 1 /* Removed */ :
                        return 0;

                      default:
                        return O();
                    }
                };
                return n(t) - n(e);
            }(t.type, e.type) || r.cu(t.doc, e.doc);
        })), this.wu(n);
        var u = e ? this.Eu() : [], s = 0 === this.uu.size && this._n ? 1 /* Synced */ : 0 /* Local */ , a = s !== this.ou;
        return this.ou = s, 0 !== o.length || a ? {
            snapshot: new Vt(this.query, t.hu, i, o, t.nn, 0 /* Local */ === s, a, 
            /* excludesMetadataChanges= */ !1),
            mu: u
        } : {
            mu: u
        };
        // no changes
        }, 
    /**
     * Applies an OnlineState change to the view, potentially generating a
     * ViewChange if the view's syncState changes as a result.
     */
    t.prototype.Eo = function(t) {
        return this._n && "Offline" /* Offline */ === t ? (
        // If we're offline, set `current` to false and then call applyChanges()
        // to refresh our syncState and generate a ViewChange as appropriate. We
        // are guaranteed to get a new TargetChange that sets `current` back to
        // true once the client is back online.
        this._n = !1, this.du({
            hu: this.hu,
            _u: new kt,
            nn: this.nn,
            _i: !1
        }, 
        /* updateLimboDocuments= */ !1)) : {
            mu: []
        };
    }, 
    /**
     * Returns whether the doc for the given key should be in limbo.
     */
    t.prototype.Tu = function(t) {
        // If the remote end says it's part of this query, it's not in limbo.
        return !this.ru.has(t) && 
        // The local store doesn't think it's a result, so it shouldn't be in limbo.
        !!this.hu.has(t) && !this.hu.get(t).he;
    }, 
    /**
     * Updates syncedDocuments, current, and limbo docs based on the given change.
     * Returns the list of changes to which docs are in limbo.
     */
    t.prototype.wu = function(t) {
        var e = this;
        t && (t.fn.forEach((function(t) {
            return e.ru = e.ru.add(t);
        })), t.dn.forEach((function(t) {})), t.wn.forEach((function(t) {
            return e.ru = e.ru.delete(t);
        })), this._n = t._n);
    }, t.prototype.Eu = function() {
        var t = this;
        // We can only determine limbo documents when we're in-sync with the server.
                if (!this._n) return [];
        // TODO(klimt): Do this incrementally so that it's not quadratic when
        // updating many documents.
                var e = this.uu;
        this.uu = It(), this.hu.forEach((function(e) {
            t.Tu(e.key) && (t.uu = t.uu.add(e.key));
        }));
        // Diff the new limbo docs with the old limbo docs.
        var n = [];
        return e.forEach((function(e) {
            t.uu.has(e) || n.push(new Ni(e));
        })), this.uu.forEach((function(t) {
            e.has(t) || n.push(new Ti(t));
        })), n;
    }, 
    /**
     * Update the in-memory state of the current view with the state read from
     * persistence.
     *
     * We update the query view whenever a client's primary status changes:
     * - When a client transitions from primary to secondary, it can miss
     *   LocalStorage updates and its query views may temporarily not be
     *   synchronized with the state on disk.
     * - For secondary to primary transitions, the client needs to update the list
     *   of `syncedDocuments` since secondary clients update their query views
     *   based purely on synthesized RemoteEvents.
     *
     * @param queryResult.documents - The documents that match the query according
     * to the LocalStore.
     * @param queryResult.remoteKeys - The keys of the documents that match the
     * query according to the backend.
     *
     * @returns The ViewChange that resulted from this synchronization.
     */
    // PORTING NOTE: Multi-tab only.
    t.prototype.Au = function(t) {
        this.ru = t.nr, this.uu = It();
        var e = this.lu(t.documents);
        return this.du(e, /*updateLimboDocuments=*/ !0);
    }, 
    /**
     * Returns a view snapshot as if this query was just listened to. Contains
     * a document add for every existing document and the `fromCache` and
     * `hasPendingWrites` status of the already established view.
     */
    // PORTING NOTE: Multi-tab only.
    t.prototype.Iu = function() {
        return Vt.rn(this.query, this.hu, this.nn, 0 /* Local */ === this.ou);
    }, t;
}(), Ai = function(
/**
     * The query itself.
     */
t, 
/**
     * The target number created by the client that is used in the watch
     * stream to identify this query.
     */
e, 
/**
     * The view is responsible for computing the final merged truth of what
     * docs are in the query. It gets notified of local and remote changes,
     * and applies the query filters and limits to determine the most correct
     * possible results.
     */
n) {
    this.query = t, this.targetId = e, this.view = n;
}, Ci = function(t) {
    this.key = t, 
    /**
             * Set to true once we've received a document. This is used in
             * getRemoteKeysForTarget() and ultimately used by WatchChangeAggregator to
             * decide whether it needs to manufacture a delete event for the target once
             * the target is CURRENT.
             */
    this.Ru = !1;
}, Di = /** @class */ function() {
    function t(t, e, n, 
    // PORTING NOTE: Manages state synchronization in multi-tab environments.
    r, i, o) {
        this.zr = t, this.Pu = e, this.yu = n, this.Vu = r, this.currentUser = i, this.pu = o, 
        this.gu = {}, this.vu = new or((function(t) {
            return qn(t);
        }), Un), this.bu = new Map, 
        /**
             * The keys of documents that are in limbo for which we haven't yet started a
             * limbo resolution query.
             */
        this.Cu = [], 
        /**
             * Keeps track of the target ID for each document that is in limbo with an
             * active target.
             */
        this.Su = new lt(J.k), 
        /**
             * Keeps track of the information about an active limbo resolution for each
             * active target ID that was started for the purpose of limbo resolution.
             */
        this.Du = new Map, this.Nu = new mi, 
        /** Stores user completion handlers, indexed by User and BatchId. */
        this.xu = {}, 
        /** Stores user callbacks waiting for all pending writes to be acknowledged. */
        this.Fu = new Map, this.Ou = Ir.Ti(), this.onlineState = "Unknown" /* Unknown */ , 
        // The primary state is set to `true` or `false` immediately after Firestore
        // startup. In the interim, a client should only be considered primary if
        // `isPrimary` is true.
        this.Lu = void 0;
    }
    return Object.defineProperty(t.prototype, "$u", {
        get: function() {
            return !0 === this.Lu;
        },
        enumerable: !1,
        configurable: !0
    }), t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A collection of references to a document from some kind of numbered entity
 * (either a target ID or batch ID). As references are added to or removed from
 * the set corresponding events are emitted to a registered garbage collector.
 *
 * Each reference is represented by a DocumentReference object. Each of them
 * contains enough information to uniquely identify the reference. They are all
 * stored primarily in a set sorted by key. A document is considered garbage if
 * there's no references in that set (this can be efficiently checked thanks to
 * sorting by key).
 *
 * ReferenceSet also keeps a secondary set that contains references sorted by
 * IDs. This one is used to efficiently implement removal of all references by
 * some target ID.
 */
/**
 * Initiates the new listen, resolves promise when listen enqueued to the
 * server. All the subsequent view snapshots or errors are sent to the
 * subscribed handlers. Returns the initial snapshot.
 */
function ki(t, r) {
    return e(this, void 0, void 0, (function() {
        var i, o, u, s, a, c;
        return n(this, (function(h) {
            switch (h.label) {
              case 0:
                return i = function(t) {
                    var e = L(t);
                    return e.Pu.Yr.uo = Oi.bind(null, e), e.Pu.Yr.Zn = Yi.bind(null, e), e.Pu.Yr.oo = Li.bind(null, e), 
                    e.gu.pr = di.bind(null, e.yu), e.gu.ku = vi.bind(null, e.yu), e;
                }(t), (s = i.vu.get(r)) ? (
                // PORTING NOTE: With Multi-Tab Web, it is possible that a query view
                // already exists when EventManager calls us for the first time. This
                // happens when the primary tab is already listening to this query on
                // behalf of another tab and the user of the primary also starts listening
                // to the query. EventManager will not have an assigned target ID in this
                // case and calls `listen` to obtain this ID.
                o = s.targetId, i.Vu.zo(o), u = s.view.Iu(), [ 3 /*break*/ , 4 ]) : [ 3 /*break*/ , 1 ];

              case 1:
                return [ 4 /*yield*/ , 
                /**
             * Assigns the given target an internal ID so that its results can be pinned so
             * they don't get GC'd. A target must be allocated in the local store before
             * the store can be used to manage its view.
             *
             * Allocating an already allocated `Target` will return the existing `TargetData`
             * for that `Target`.
             */
                function(t, e) {
                    var n = L(t);
                    return n.persistence.runTransaction("Allocate target", "readwrite", (function(t) {
                        var r;
                        return n.gi.Zi(t, e).next((function(i) {
                            return i ? (
                            // This target has been listened to previously, so reuse the
                            // previous targetID.
                            // TODO(mcg): freshen last accessed date?
                            r = i, ur.resolve(r)) : n.gi.Mu(t).next((function(i) {
                                return r = new at(e, i, 0 /* Listen */ , t.Gi), n.gi.Uu(t, r).next((function() {
                                    return r;
                                }));
                            }));
                        }));
                    })).then((function(t) {
                        // If Multi-Tab is enabled, the existing target data may be newer than
                        // the in-memory data
                        var r = n.Ii.get(t.targetId);
                        return (null === r || t.ft.F(r.ft) > 0) && (n.Ii = n.Ii.Tt(t.targetId, t), n.Ri.set(e, t.targetId)), 
                        t;
                    }));
                }(i.zr, Rn(r)) ];

              case 2:
                return a = h.sent(), c = i.Vu.zo(a.targetId), o = a.targetId, [ 4 /*yield*/ , 
                /**
                 * Registers a view for a previously unknown query and computes its initial
                 * snapshot.
                 */
                function(t, r, i, o) {
                    return e(this, void 0, void 0, (function() {
                        var u, s, a, c, h, f;
                        return n(this, (function(l) {
                            switch (l.label) {
                              case 0:
                                // PORTING NOTE: On Web only, we inject the code that registers new Limbo
                                // targets based on view changes. This allows us to only depend on Limbo
                                // changes when user code includes queries.
                                return t.qu = function(r, i, o) {
                                    return function(t, r, i, o) {
                                        return e(this, void 0, void 0, (function() {
                                            var e, u, s;
                                            return n(this, (function(n) {
                                                switch (n.label) {
                                                  case 0:
                                                    return e = r.view.lu(i), e._i ? [ 4 /*yield*/ , Pr(t.zr, r.query, 
                                                    /* usePreviousResults= */ !1).then((function(t) {
                                                        var n = t.documents;
                                                        return r.view.lu(n, e);
                                                    })) ] : [ 3 /*break*/ , 2 ];

                                                  case 1:
                                                    // The query has a limit and some docs were removed, so we need
                                                    // to re-run the query against the local store to make sure we
                                                    // didn't lose any good docs that had been past the limit.
                                                    e = n.sent(), n.label = 2;

                                                  case 2:
                                                    return u = o && o.on.get(r.targetId), s = r.view.du(e, 
                                                    /* updateLimboDocuments= */ t.$u, u), [ 2 /*return*/ , (Fi(t, r.targetId, s.mu), 
                                                    s.snapshot) ];
                                                }
                                            }));
                                        }));
                                    }(t, r, i, o);
                                }, [ 4 /*yield*/ , Pr(t.zr, r, 
                                /* usePreviousResults= */ !0) ];

                              case 1:
                                return u = l.sent(), s = new Ii(r, u.nr), a = s.lu(u.documents), c = Ot.ln(i, o && "Offline" /* Offline */ !== t.onlineState), 
                                h = s.du(a, 
                                /* updateLimboDocuments= */ t.$u, c), Fi(t, i, h.mu), f = new Ai(r, i, s), t.vu.set(r, f), 
                                t.bu.has(i) ? t.bu.get(i).push(r) : t.bu.set(i, [ r ]), [ 2 /*return*/ , h.snapshot ];
                            }
                        }));
                    }));
                }(i, r, o, "current" === c) ];

              case 3:
                u = h.sent(), i.$u && zr(i.Pu, a), h.label = 4;

              case 4:
                return [ 2 /*return*/ , u ];
            }
        }));
    }));
}

function Vi(t, r) {
    return e(this, void 0, void 0, (function() {
        var e, i, o;
        return n(this, (function(n) {
            switch (n.label) {
              case 0:
                return e = L(t), i = e.vu.get(r), (o = e.bu.get(i.targetId)).length > 1 ? [ 2 /*return*/ , (e.bu.set(i.targetId, o.filter((function(t) {
                    return !Un(t, r);
                }))), void e.vu.delete(r)) ] : e.$u ? (
                // We need to remove the local query target first to allow us to verify
                // whether any other client is still interested in this target.
                e.Vu.Yo(i.targetId), e.Vu.tu(i.targetId) ? [ 3 /*break*/ , 2 ] : [ 4 /*yield*/ , Or(e.zr, i.targetId, 
                /*keepPersistedTargetData=*/ !1).then((function() {
                    e.Vu.Xo(i.targetId), Gr(e.Pu, i.targetId), Mi(e, i.targetId);
                })).catch(Lr) ]) : [ 3 /*break*/ , 3 ];

              case 1:
                n.sent(), n.label = 2;

              case 2:
                return [ 3 /*break*/ , 5 ];

              case 3:
                return Mi(e, i.targetId), [ 4 /*yield*/ , Or(e.zr, i.targetId, 
                /*keepPersistedTargetData=*/ !0) ];

              case 4:
                n.sent(), n.label = 5;

              case 5:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * Initiates the write of local mutation batch which involves adding the
 * writes to the mutation queue, notifying the remote store about new
 * mutations and raising events for any changes this write caused.
 *
 * The promise returned by this call is resolved when the above steps
 * have completed, *not* when the write was acked by the backend. The
 * userCallback is resolved once the write was acked/rejected by the
 * backend (or failed locally for any other reason).
 */ function _i(t, r, i) {
    return e(this, void 0, void 0, (function() {
        var e, o, u, s;
        return n(this, (function(n) {
            switch (n.label) {
              case 0:
                e = function(t) {
                    var e = L(t);
                    return e.Pu.Yr.co = Ri.bind(null, e), e.Pu.Yr.ho = Si.bind(null, e), e;
                }(t), n.label = 1;

              case 1:
                return n.trys.push([ 1, 5, , 6 ]), [ 4 /*yield*/ , function(t, e) {
                    var n, r = L(t), i = W.now(), o = e.reduce((function(t, e) {
                        return t.add(e.key);
                    }), It());
                    return r.persistence.runTransaction("Locally write mutations", "readwrite", (function(t) {
                        return r.bi.Je(t, o).next((function(o) {
                            n = o;
                            for (
                            // For non-idempotent mutations (such as `FieldValue.increment()`),
                            // we record the base state in a separate patch mutation. This is
                            // later used to guarantee consistent values and prevents flicker
                            // even if the backend sends us an update that already includes our
                            // transform.
                            var u = [], s = 0, a = e; s < a.length; s++) {
                                var c = a[s], h = an(c, n.get(c.key));
                                null != h && 
                                // NOTE: The base state should only be applied if there's some
                                // existing document to override, so use a Precondition of
                                // exists=true
                                u.push(new ln(c.key, h, En(h.proto.mapValue), nn.exists(!0)));
                            }
                            return r.je.Bu(t, i, u, e);
                        }));
                    })).then((function(t) {
                        var e = t.ve(n);
                        return {
                            batchId: t.batchId,
                            Qu: e
                        };
                    }));
                }(e.zr, r) ];

              case 2:
                return o = n.sent(), e.Vu.Go(o.batchId), function(t, e, n) {
                    var r = t.xu[t.currentUser.h()];
                    r || (r = new lt(G)), r = r.Tt(e, n), t.xu[t.currentUser.h()] = r;
                }(e, o.batchId, i), [ 4 /*yield*/ , Bi(e, o.Qu) ];

              case 3:
                return n.sent(), [ 4 /*yield*/ , ei(e.Pu) ];

              case 4:
                return n.sent(), [ 3 /*break*/ , 6 ];

              case 5:
                return u = n.sent(), s = mr(u, "Failed to persist write"), i.reject(s), [ 3 /*break*/ , 6 ];

              case 6:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * Applies one remote event to the sync engine, notifying any views of the
 * changes, and releasing any pending mutation batches that would become
 * visible because of the snapshot version the remote event contains.
 */ function Oi(t, r) {
    return e(this, void 0, void 0, (function() {
        var e, i;
        return n(this, (function(n) {
            switch (n.label) {
              case 0:
                e = L(t), n.label = 1;

              case 1:
                return n.trys.push([ 1, 4, , 6 ]), [ 4 /*yield*/ , Vr(e.zr, r) ];

              case 2:
                return i = n.sent(), 
                // Update `receivedDocument` as appropriate for any limbo targets.
                r.on.forEach((function(t, n) {
                    var r = e.Du.get(n);
                    r && (
                    // Since this is a limbo resolution lookup, it's for a single document
                    // and it could be added, modified, or removed, but not a combination.
                    P(t.fn.size + t.dn.size + t.wn.size <= 1), t.fn.size > 0 ? r.Ru = !0 : t.dn.size > 0 ? P(r.Ru) : t.wn.size > 0 && (P(r.Ru), 
                    r.Ru = !1));
                })), [ 4 /*yield*/ , Bi(e, i, r) ];

              case 3:
                // Update `receivedDocument` as appropriate for any limbo targets.
                return n.sent(), [ 3 /*break*/ , 6 ];

              case 4:
                return [ 4 /*yield*/ , Lr(n.sent()) ];

              case 5:
                return n.sent(), [ 3 /*break*/ , 6 ];

              case 6:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * Applies an OnlineState change to the sync engine and notifies any views of
 * the change.
 */ function Pi(t, e, n) {
    var r = L(t);
    // If we are the secondary client, we explicitly ignore the remote store's
    // online state (the local client may go offline, even though the primary
    // tab remains online) and only apply the primary tab's online state from
    // SharedClientState.
        if (r.$u && 0 /* RemoteStore */ === n || !r.$u && 1 /* SharedClientState */ === n) {
        var i = [];
        r.vu.forEach((function(t, n) {
            var r = n.view.Eo(e);
            r.snapshot && i.push(r.snapshot);
        })), function(t, e) {
            var n = L(t);
            n.onlineState = e;
            var r = !1;
            n.queries.forEach((function(t, n) {
                for (var i = 0, o = n.listeners; i < o.length; i++) {
                    // Run global snapshot listeners if a consistent snapshot has been emitted.
                    o[i].Eo(e) && (r = !0);
                }
            })), r && yi(n);
        }(r.yu, e), i.length && r.gu.pr(i), r.onlineState = e, r.$u && r.Vu.eu(e);
    }
}

/**
 * Rejects the listen for the given targetID. This can be triggered by the
 * backend for any active target.
 *
 * @param syncEngine - The sync engine implementation.
 * @param targetId - The targetID corresponds to one previously initiated by the
 * user as part of TargetData passed to listen() on RemoteStore.
 * @param err - A description of the condition that has forced the rejection.
 * Nearly always this will be an indication that the user is no longer
 * authorized to see the data matching the target.
 */ function Li(t, r, i) {
    return e(this, void 0, void 0, (function() {
        var e, o, u, s, a, c;
        return n(this, (function(n) {
            switch (n.label) {
              case 0:
                // PORTING NOTE: Multi-tab only.
                return (e = L(t)).Vu.Ho(r, "rejected", i), o = e.Du.get(r), (u = o && o.key) ? (s = (s = new lt(J.k)).Tt(u, new In(u, Y.min())), 
                a = It().add(u), c = new _t(Y.min(), 
                /* targetChanges= */ new Map, 
                /* targetMismatches= */ new vt(G), s, a), [ 4 /*yield*/ , Oi(e, c) ]) : [ 3 /*break*/ , 2 ];

              case 1:
                return n.sent(), 
                // Since this query failed, we won't want to manually unlisten to it.
                // We only remove it from bookkeeping after we successfully applied the
                // RemoteEvent. If `applyRemoteEvent()` throws, we want to re-listen to
                // this query when the RemoteStore restarts the Watch stream, which should
                // re-trigger the target failure.
                e.Su = e.Su.remove(u), e.Du.delete(r), Gi(e), [ 3 /*break*/ , 4 ];

              case 2:
                return [ 4 /*yield*/ , Or(e.zr, r, 
                /* keepPersistedTargetData */ !1).then((function() {
                    return Mi(e, r, i);
                })).catch(Lr) ];

              case 3:
                n.sent(), n.label = 4;

              case 4:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

function Ri(t, r) {
    return e(this, void 0, void 0, (function() {
        var e, i, o;
        return n(this, (function(n) {
            switch (n.label) {
              case 0:
                e = L(t), i = r.batch.batchId, n.label = 1;

              case 1:
                return n.trys.push([ 1, 4, , 6 ]), [ 4 /*yield*/ , Dr(e.zr, r) ];

              case 2:
                return o = n.sent(), 
                // The local store may or may not be able to apply the write result and
                // raise events immediately (depending on whether the watcher is caught
                // up), so we raise user callbacks first so that they consistently happen
                // before listen events.
                ji(e, i, /*error=*/ null), qi(e, i), e.Vu.Ko(i, "acknowledged"), [ 4 /*yield*/ , Bi(e, o) ];

              case 3:
                // The local store may or may not be able to apply the write result and
                // raise events immediately (depending on whether the watcher is caught
                // up), so we raise user callbacks first so that they consistently happen
                // before listen events.
                return n.sent(), [ 3 /*break*/ , 6 ];

              case 4:
                return [ 4 /*yield*/ , Lr(n.sent()) ];

              case 5:
                return n.sent(), [ 3 /*break*/ , 6 ];

              case 6:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

function Si(t, r, i) {
    return e(this, void 0, void 0, (function() {
        var e, o;
        return n(this, (function(n) {
            switch (n.label) {
              case 0:
                e = L(t), n.label = 1;

              case 1:
                return n.trys.push([ 1, 4, , 6 ]), [ 4 /*yield*/ , function(t, e) {
                    var n = L(t);
                    return n.persistence.runTransaction("Reject batch", "readwrite-primary", (function(t) {
                        var r;
                        return n.je.ju(t, e).next((function(e) {
                            return P(null !== e), r = e.keys(), n.je.qi(t, e);
                        })).next((function() {
                            return n.je.Bi(t);
                        })).next((function() {
                            return n.bi.Je(t, r);
                        }));
                    }));
                }(e.zr, r) ];

              case 2:
                return o = n.sent(), 
                // The local store may or may not be able to apply the write result and
                // raise events immediately (depending on whether the watcher is caught up),
                // so we raise user callbacks first so that they consistently happen before
                // listen events.
                ji(e, r, i), qi(e, r), e.Vu.Ko(r, "rejected", i), [ 4 /*yield*/ , Bi(e, o) ];

              case 3:
                // The local store may or may not be able to apply the write result and
                // raise events immediately (depending on whether the watcher is caught up),
                // so we raise user callbacks first so that they consistently happen before
                // listen events.
                return n.sent(), [ 3 /*break*/ , 6 ];

              case 4:
                return [ 4 /*yield*/ , Lr(n.sent()) ];

              case 5:
                return n.sent(), [ 3 /*break*/ , 6 ];

              case 6:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * Registers a user callback that resolves when all pending mutations at the moment of calling
 * are acknowledged .
 */ function Ui(t, r) {
    return e(this, void 0, void 0, (function() {
        var e, i, o, u, s;
        return n(this, (function(n) {
            switch (n.label) {
              case 0:
                Qr((e = L(t)).Pu) || D("SyncEngine", "The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled."), 
                n.label = 1;

              case 1:
                return n.trys.push([ 1, 3, , 4 ]), [ 4 /*yield*/ , function(t) {
                    var e = L(t);
                    return e.persistence.runTransaction("Get highest unacknowledged batch id", "readonly", (function(t) {
                        return e.je.Wu(t);
                    }));
                }(e.zr) ];

              case 2:
                return -1 === (i = n.sent()) ? [ 2 /*return*/ , void r.resolve() ] : ((o = e.Fu.get(i) || []).push(r), 
                e.Fu.set(i, o), [ 3 /*break*/ , 4 ]);

              case 3:
                return u = n.sent(), s = mr(u, "Initialization of waitForPendingWrites() operation failed"), 
                r.reject(s), [ 3 /*break*/ , 4 ];

              case 4:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * Triggers the callbacks that are waiting for this batch id to get acknowledged by server,
 * if there are any.
 */ function qi(t, e) {
    (t.Fu.get(e) || []).forEach((function(t) {
        t.resolve();
    })), t.Fu.delete(e)
    /** Reject all outstanding callbacks waiting for pending writes to complete. */;
}

function ji(t, e, n) {
    var r = L(t), i = r.xu[r.currentUser.h()];
    // NOTE: Mutations restored from persistence won't have callbacks, so it's
    // okay for there to be no callback for this ID.
    if (i) {
        var o = i.get(e);
        o && (n ? o.reject(n) : o.resolve(), i = i.remove(e)), r.xu[r.currentUser.h()] = i;
    }
}

function Mi(t, e, n) {
    void 0 === n && (n = null), t.Vu.Yo(e);
    for (var r = 0, i = t.bu.get(e); r < i.length; r++) {
        var o = i[r];
        t.vu.delete(o), n && t.gu.ku(o, n);
    }
    t.bu.delete(e), t.$u && t.Nu.Lo(e).forEach((function(e) {
        t.Nu.Mo(e) || 
        // We removed the last reference for this key
        xi(t, e);
    }));
}

function xi(t, e) {
    // It's possible that the target already got removed because the query failed. In that case,
    // the key won't exist in `limboTargetsByKey`. Only do the cleanup if we still have the target.
    var n = t.Su.get(e);
    null !== n && (Gr(t.Pu, n), t.Su = t.Su.remove(e), t.Du.delete(n), Gi(t));
}

function Fi(t, e, n) {
    for (var r = 0, i = n; r < i.length; r++) {
        var o = i[r];
        o instanceof Ti ? (t.Nu.Do(o.key, e), zi(t, o)) : o instanceof Ni ? (D("SyncEngine", "Document no longer in limbo: " + o.key), 
        t.Nu.xo(o.key, e), t.Nu.Mo(o.key) || 
        // We removed the last reference for this key
        xi(t, o.key)) : O();
    }
}

function zi(t, e) {
    var n = e.key;
    t.Su.get(n) || (D("SyncEngine", "New document in limbo: " + n), t.Cu.push(n), Gi(t));
}

/**
 * Starts listens for documents in limbo that are enqueued for resolution,
 * subject to a maximum number of concurrent resolutions.
 *
 * Without bounding the number of concurrent resolutions, the server can fail
 * with "resource exhausted" errors which can lead to pathological client
 * behavior as seen in https://github.com/firebase/firebase-js-sdk/issues/2683.
 */ function Gi(t) {
    for (;t.Cu.length > 0 && t.Su.size < t.pu; ) {
        var e = t.Cu.shift(), n = t.Ou.next();
        t.Du.set(n, new Ci(e)), t.Su = t.Su.Tt(e, n), zr(t.Pu, new at(Rn(Dn(e.path)), n, 2 /* LimboResolution */ , lr.Es));
    }
}

function Bi(t, r, i) {
    return e(this, void 0, void 0, (function() {
        var o, u, s, a;
        return n(this, (function(c) {
            switch (c.label) {
              case 0:
                return o = L(t), u = [], s = [], a = [], o.vu.W() ? [ 3 /*break*/ , 3 ] : (o.vu.forEach((function(t, e) {
                    a.push(o.qu(e, r, i).then((function(t) {
                        if (t) {
                            o.$u && o.Vu.Ho(e.targetId, t.fromCache ? "not-current" : "current"), u.push(t);
                            var n = fr.ls(e.targetId, t);
                            s.push(n);
                        }
                    })));
                })), [ 4 /*yield*/ , Promise.all(a) ]);

              case 1:
                return c.sent(), o.gu.pr(u), [ 4 /*yield*/ , function(t, r) {
                    return e(this, void 0, void 0, (function() {
                        var e, i, o, u, s, a, c, h, f;
                        return n(this, (function(n) {
                            switch (n.label) {
                              case 0:
                                e = L(t), n.label = 1;

                              case 1:
                                return n.trys.push([ 1, 3, , 4 ]), [ 4 /*yield*/ , e.persistence.runTransaction("notifyLocalViewChanges", "readwrite", (function(t) {
                                    return ur.forEach(r, (function(n) {
                                        return ur.forEach(n.cs, (function(r) {
                                            return e.persistence.Hi.Do(t, n.targetId, r);
                                        })).next((function() {
                                            return ur.forEach(n.hs, (function(r) {
                                                return e.persistence.Hi.xo(t, n.targetId, r);
                                            }));
                                        }));
                                    }));
                                })) ];

                              case 2:
                                return n.sent(), [ 3 /*break*/ , 4 ];

                              case 3:
                                if (!dr(i = n.sent())) throw i;
                                // If `notifyLocalViewChanges` fails, we did not advance the sequence
                                // number for the documents that were included in this transaction.
                                // This might trigger them to be deleted earlier than they otherwise
                                // would have, but it should not invalidate the integrity of the data.
                                                                return D("LocalStore", "Failed to update sequence numbers: " + i), 
                                [ 3 /*break*/ , 4 ];

                              case 4:
                                for (o = 0, u = r; o < u.length; o++) s = u[o], a = s.targetId, s.fromCache || (c = e.Ii.get(a), 
                                h = c.ft, f = c.Et(h), 
                                // Advance the last limbo free snapshot version
                                e.Ii = e.Ii.Tt(a, f));
                                return [ 2 /*return*/ ];
                            }
                        }));
                    }));
                }(o.zr, s) ];

              case 2:
                c.sent(), c.label = 3;

              case 3:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

function Wi(t, r) {
    return e(this, void 0, void 0, (function() {
        var e, i;
        return n(this, (function(n) {
            switch (n.label) {
              case 0:
                return (e = L(t)).currentUser.isEqual(r) ? [ 3 /*break*/ , 3 ] : (D("SyncEngine", "User change. New user:", r.h()), 
                [ 4 /*yield*/ , Cr(e.zr, r) ]);

              case 1:
                return i = n.sent(), e.currentUser = r, 
                // Fails tasks waiting for pending writes requested by previous user.
                function(t, e) {
                    t.Fu.forEach((function(t) {
                        t.forEach((function(t) {
                            t.reject(new S(R.CANCELLED, "'waitForPendingWrites' promise is rejected due to a user change."));
                        }));
                    })), t.Fu.clear();
                }(e), 
                // TODO(b/114226417): Consider calling this only in the primary tab.
                e.Vu.nu(r, i.Li, i.$i), [ 4 /*yield*/ , Bi(e, i.Oi) ];

              case 2:
                n.sent(), n.label = 3;

              case 3:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

function Yi(t, e) {
    var n = L(t), r = n.Du.get(e);
    if (r && r.Ru) return It().add(r.key);
    var i = It(), o = n.bu.get(e);
    if (!o) return i;
    for (var u = 0, s = o; u < s.length; u++) {
        var a = s[u], c = n.vu.get(a);
        i = i.Kt(c.view.au);
    }
    return i;
}

var Hi = /** @class */ function() {
    function t(t, e) {
        this.We = t, this.Hi = e, 
        /**
             * The set of all mutations that have been sent but not yet been applied to
             * the backend.
             */
        this.je = [], 
        /** Next value to use when assigning sequential IDs to each mutation batch. */
        this.Gu = 1, 
        /** An ordered mapping between documents and the mutations batch IDs. */
        this.Ku = new vt(wi.bo);
    }
    return t.prototype.zu = function(t) {
        return ur.resolve(0 === this.je.length);
    }, t.prototype.Bu = function(t, e, n, r) {
        var i = this.Gu;
        this.Gu++, this.je.length > 0 && this.je[this.je.length - 1];
        var o = new rr(i, e, n, r);
        this.je.push(o);
        // Track references by document key and index collection parents.
        for (var u = 0, s = r; u < s.length; u++) {
            var a = s[u];
            this.Ku = this.Ku.add(new wi(a.key, i)), this.We.wi(t, a.key.path.q());
        }
        return ur.resolve(o);
    }, t.prototype.ju = function(t, e) {
        return ur.resolve(this.Hu(e));
    }, t.prototype.Xi = function(t, e) {
        var n = e + 1, r = this.Yu(n), i = r < 0 ? 0 : r;
        // The requested batchId may still be out of range so normalize it to the
        // start of the queue.
                return ur.resolve(this.je.length > i ? this.je[i] : null);
    }, t.prototype.Wu = function() {
        return ur.resolve(0 === this.je.length ? -1 : this.Gu - 1);
    }, t.prototype.Fi = function(t) {
        return ur.resolve(this.je.slice());
    }, t.prototype.Ke = function(t, e) {
        var n = this, r = new wi(e, 0), i = new wi(e, Number.POSITIVE_INFINITY), o = [];
        return this.Ku.jt([ r, i ], (function(t) {
            var e = n.Hu(t.Uo);
            o.push(e);
        })), ur.resolve(o);
    }, t.prototype.Ze = function(t, e) {
        var n = this, r = new vt(G);
        return e.forEach((function(t) {
            var e = new wi(t, 0), i = new wi(t, Number.POSITIVE_INFINITY);
            n.Ku.jt([ e, i ], (function(t) {
                r = r.add(t.Uo);
            }));
        })), ur.resolve(this.Ju(r));
    }, t.prototype.os = function(t, e) {
        // Use the query path as a prefix for testing if a document matches the
        // query.
        var n = e.path, r = n.length + 1, i = n;
        // Construct a document reference for actually scanning the index. Unlike
        // the prefix the document key in this reference must have an even number of
        // segments. The empty segment can be used a suffix of the query path
        // because it precedes all other segments in an ordered traversal.
                J.ot(i) || (i = i.child(""));
        var o = new wi(new J(i), 0), u = new vt(G);
        // Find unique batchIDs referenced by all documents potentially matching the
        // query.
                return this.Ku.Wt((function(t) {
            var e = t.key.path;
            return !!n.G(e) && (
            // Rows with document keys more than one segment longer than the query
            // path can't be matches. For example, a query on 'rooms' can't match
            // the document /rooms/abc/messages/xyx.
            // TODO(mcg): we'll need a different scanner when we implement
            // ancestor queries.
            e.length === r && (u = u.add(t.Uo)), !0);
        }), o), ur.resolve(this.Ju(u));
    }, t.prototype.Ju = function(t) {
        var e = this, n = [];
        // Construct an array of matching batches, sorted by batchID to ensure that
        // multiple mutations affecting the same document key are applied in order.
                return t.forEach((function(t) {
            var r = e.Hu(t);
            null !== r && n.push(r);
        })), n;
    }, t.prototype.qi = function(t, e) {
        var n = this;
        P(0 === this.Xu(e.batchId, "removed")), this.je.shift();
        var r = this.Ku;
        return ur.forEach(e.mutations, (function(i) {
            var o = new wi(i.key, e.batchId);
            return r = r.delete(o), n.Hi.Zu(t, i.key);
        })).next((function() {
            n.Ku = r;
        }));
    }, t.prototype.tc = function(t) {
        // No-op since the memory mutation queue does not maintain a separate cache.
    }, t.prototype.Mo = function(t, e) {
        var n = new wi(e, 0), r = this.Ku.Gt(n);
        return ur.resolve(e.isEqual(r && r.key));
    }, t.prototype.Bi = function(t) {
        return this.je.length, ur.resolve();
    }, 
    /**
     * Finds the index of the given batchId in the mutation queue and asserts that
     * the resulting index is within the bounds of the queue.
     *
     * @param batchId - The batchId to search for
     * @param action - A description of what the caller is doing, phrased in passive
     * form (e.g. "acknowledged" in a routine that acknowledges batches).
     */
    t.prototype.Xu = function(t, e) {
        return this.Yu(t);
    }, 
    /**
     * Finds the index of the given batchId in the mutation queue. This operation
     * is O(1).
     *
     * @returns The computed index of the batch with the given batchId, based on
     * the state of the queue. Note this index can be negative if the requested
     * batchId has already been remvoed from the queue or past the end of the
     * queue if the batchId is larger than the last added batch.
     */
    t.prototype.Yu = function(t) {
        return 0 === this.je.length ? 0 : t - this.je[0].batchId;
        // Examine the front of the queue to figure out the difference between the
        // batchId and indexes in the array. Note that since the queue is ordered
        // by batchId, if the first batch has a larger batchId then the requested
        // batchId doesn't exist in the queue.
        }, 
    /**
     * A version of lookupMutationBatch that doesn't return a promise, this makes
     * other functions that uses this code easier to read and more efficent.
     */
    t.prototype.Hu = function(t) {
        var e = this.Yu(t);
        return e < 0 || e >= this.je.length ? null : this.je[e];
    }, t;
}(), Qi = /** @class */ function() {
    /**
     * @param sizer - Used to assess the size of a document. For eager GC, this is
     * expected to just return 0 to avoid unnecessarily doing the work of
     * calculating the size.
     */
    function t(t, e) {
        this.We = t, this.nc = e, 
        /** Underlying cache of documents and their read times. */
        this.docs = new lt(J.k), 
        /** Size of all cached documents. */
        this.size = 0
        /**
     * Adds the supplied entry to the cache and updates the cache size as appropriate.
     *
     * All calls of `addEntry`  are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()`.
     */;
    }
    return t.prototype.Ui = function(t, e, n) {
        var r = e.key, i = this.docs.get(r), o = i ? i.size : 0, u = this.nc(e);
        return this.docs = this.docs.Tt(r, {
            ec: e,
            size: u,
            readTime: n
        }), this.size += u - o, this.We.wi(t, r.path.q());
    }, 
    /**
     * Removes the specified entry from the cache and updates the cache size as appropriate.
     *
     * All calls of `removeEntry` are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()`.
     */
    t.prototype.Yi = function(t) {
        var e = this.docs.get(t);
        e && (this.docs = this.docs.remove(t), this.size -= e.size);
    }, t.prototype.He = function(t, e) {
        var n = this.docs.get(e);
        return ur.resolve(n ? n.ec : null);
    }, t.prototype.getEntries = function(t, e) {
        var n = this, r = wt();
        return e.forEach((function(t) {
            var e = n.docs.get(t);
            r = r.Tt(t, e ? e.ec : null);
        })), ur.resolve(r);
    }, t.prototype.ts = function(t, e, n) {
        for (var r = Et(), i = new J(e.path.child("")), o = this.docs.gt(i)
        // Documents are ordered by key, so we can use a prefix scan to narrow down
        // the documents we need to match the query against.
        ; o.Nt(); ) {
            var u = o.Dt(), s = u.key, a = u.value, c = a.ec, h = a.readTime;
            if (!e.path.G(s.path)) break;
            h.F(n) <= 0 || c instanceof Nn && Mn(e, c) && (r = r.Tt(c.key, c));
        }
        return ur.resolve(r);
    }, t.prototype.sc = function(t, e) {
        return ur.forEach(this.docs, (function(t) {
            return e(t);
        }));
    }, t.prototype.ki = function(t) {
        // `trackRemovals` is ignores since the MemoryRemoteDocumentCache keeps
        // a separate changelog and does not need special handling for removals.
        return new Xi(this);
    }, t.prototype.ic = function(t) {
        return ur.resolve(this.size);
    }, t;
}(), Xi = /** @class */ function(e) {
    function n(t) {
        var n = this;
        return (n = e.call(this) || this).ac = t, n;
    }
    return t(n, e), n.prototype.du = function(t) {
        var e = this, n = [];
        return this.Qu.forEach((function(r, i) {
            i && i.ec ? n.push(e.ac.Ui(t, i.ec, e.oc(r))) : e.ac.Yi(r);
        })), ur.qe(n);
    }, n.prototype.cc = function(t, e) {
        return this.ac.He(t, e);
    }, n.prototype.hc = function(t, e) {
        return this.ac.getEntries(t, e);
    }, n;
}(/** @class */ function() {
    function t() {
        // A mapping of document key to the new cache entry that should be written (or null if any
        // existing cache entry should be removed).
        this.Qu = new or((function(t) {
            return t.toString();
        }), (function(t, e) {
            return t.isEqual(e);
        })), this.rc = !1;
    }
    return t.prototype.oc = function(t) {
        var e = this.Qu.get(t);
        return e ? e.readTime : Y.min();
    }, 
    /**
     * Buffers a `RemoteDocumentCache.addEntry()` call.
     *
     * You can only modify documents that have already been retrieved via
     * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
     */
    t.prototype.Ui = function(t, e) {
        this.uc(), this.Qu.set(t.key, {
            ec: t,
            readTime: e
        });
    }, 
    /**
     * Buffers a `RemoteDocumentCache.removeEntry()` call.
     *
     * You can only remove documents that have already been retrieved via
     * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
     */
    t.prototype.Yi = function(t, e) {
        void 0 === e && (e = null), this.uc(), this.Qu.set(t, {
            ec: null,
            readTime: e
        });
    }, 
    /**
     * Looks up an entry in the cache. The buffered changes will first be checked,
     * and if no buffered change applies, this will forward to
     * `RemoteDocumentCache.getEntry()`.
     *
     * @param transaction - The transaction in which to perform any persistence
     *     operations.
     * @param documentKey - The key of the entry to look up.
     * @returns The cached Document or NoDocument entry, or null if we have
     *     nothing cached.
     */
    t.prototype.He = function(t, e) {
        this.uc();
        var n = this.Qu.get(e);
        return void 0 !== n ? ur.resolve(n.ec) : this.cc(t, e);
    }, 
    /**
     * Looks up several entries in the cache, forwarding to
     * `RemoteDocumentCache.getEntry()`.
     *
     * @param transaction - The transaction in which to perform any persistence
     *     operations.
     * @param documentKeys - The keys of the entries to look up.
     * @returns A map of cached `Document`s or `NoDocument`s, indexed by key. If
     *     an entry cannot be found, the corresponding key will be mapped to a
     *     null value.
     */
    t.prototype.getEntries = function(t, e) {
        return this.hc(t, e);
    }, 
    /**
     * Applies buffered changes to the underlying RemoteDocumentCache, using
     * the provided transaction.
     */
    t.prototype.apply = function(t) {
        return this.uc(), this.rc = !0, this.du(t);
    }, 
    /** Helper to assert this.changes is not null  */ t.prototype.uc = function() {}, 
    t;
}()), Ki = /** @class */ function() {
    function t(t) {
        this.persistence = t, 
        /**
             * Maps a target to the data about that target
             */
        this.lc = new or((function(t) {
            return nt(t);
        }), rt), 
        /** The last received snapshot version. */
        this.lastRemoteSnapshotVersion = Y.min(), 
        /** The highest numbered target ID encountered. */
        this.highestTargetId = 0, 
        /** The highest sequence number encountered. */
        this._c = 0, 
        /**
             * A ordered bidirectional mapping between documents and the remote target
             * IDs.
             */
        this.fc = new mi, this.targetCount = 0, this.dc = Ir.mi();
    }
    return t.prototype.Qn = function(t, e) {
        return this.lc.forEach((function(t, n) {
            return e(n);
        })), ur.resolve();
    }, t.prototype.Qi = function(t) {
        return ur.resolve(this.lastRemoteSnapshotVersion);
    }, t.prototype.wc = function(t) {
        return ur.resolve(this._c);
    }, t.prototype.Mu = function(t) {
        return this.highestTargetId = this.dc.next(), ur.resolve(this.highestTargetId);
    }, t.prototype.Ji = function(t, e, n) {
        return n && (this.lastRemoteSnapshotVersion = n), e > this._c && (this._c = e), 
        ur.resolve();
    }, t.prototype.Ec = function(t) {
        this.lc.set(t.target, t);
        var e = t.targetId;
        e > this.highestTargetId && (this.dc = new Ir(e), this.highestTargetId = e), t.sequenceNumber > this._c && (this._c = t.sequenceNumber);
    }, t.prototype.Uu = function(t, e) {
        return this.Ec(e), this.targetCount += 1, ur.resolve();
    }, t.prototype.Ki = function(t, e) {
        return this.Ec(e), ur.resolve();
    }, t.prototype.mc = function(t, e) {
        return this.lc.delete(e.target), this.fc.Lo(e.targetId), this.targetCount -= 1, 
        ur.resolve();
    }, t.prototype.Tc = function(t, e, n) {
        var r = this, i = 0, o = [];
        return this.lc.forEach((function(u, s) {
            s.sequenceNumber <= e && null === n.get(s.targetId) && (r.lc.delete(u), o.push(r.Ac(t, s.targetId)), 
            i++);
        })), ur.qe(o).next((function() {
            return i;
        }));
    }, t.prototype.Ic = function(t) {
        return ur.resolve(this.targetCount);
    }, t.prototype.Zi = function(t, e) {
        var n = this.lc.get(e) || null;
        return ur.resolve(n);
    }, t.prototype.Wi = function(t, e, n) {
        return this.fc.No(e, n), ur.resolve();
    }, t.prototype.ji = function(t, e, n) {
        this.fc.Oo(e, n);
        var r = this.persistence.Hi, i = [];
        return r && e.forEach((function(e) {
            i.push(r.Zu(t, e));
        })), ur.qe(i);
    }, t.prototype.Ac = function(t, e) {
        return this.fc.Lo(e), ur.resolve();
    }, t.prototype.tr = function(t, e) {
        var n = this.fc.ko(e);
        return ur.resolve(n);
    }, t.prototype.Mo = function(t, e) {
        return ur.resolve(this.fc.Mo(e));
    }, t;
}(), Ji = /** @class */ function() {
    function t(t) {
        this.serializer = t, this.Rc = new Map, this.Pc = new Map;
    }
    return t.prototype.yc = function(t, e) {
        return ur.resolve(this.Rc.get(e));
    }, t.prototype.Vc = function(t, e) {
        /** Encodes a BundleMetadata proto object to a Bundle model object. */
        var n;
        return this.Rc.set(e.id, {
            id: (n = e).id,
            version: n.version,
            createTime: ge(n.createTime)
        }), ur.resolve();
    }, t.prototype.gc = function(t, e) {
        return ur.resolve(this.Pc.get(e));
    }, t.prototype.vc = function(t, e) {
        var n;
        return this.Pc.set(e.name, {
            name: (n = e).name,
            query: Er(n.bundledQuery),
            readTime: ge(n.readTime)
        }), ur.resolve();
    }, t;
}(), $i = /** @class */ function() {
    /**
     * The constructor accepts a factory for creating a reference delegate. This
     * allows both the delegate and this instance to have strong references to
     * each other without having nullable fields that would then need to be
     * checked or asserted on every access.
     */
    function t(t, e) {
        var n = this;
        this.bc = {}, this.Cc = new lr(0), this.Sc = !1, this.Sc = !0, this.Hi = t(this), 
        this.gi = new Ki(this), this.We = new Tr, this.Qe = function(t, e) {
            return new Qi(t, (function(t) {
                return n.Hi.Dc(t);
            }));
        }(this.We), this.serializer = new br(e), this.Si = new Ji(this.serializer);
    }
    return t.prototype.start = function() {
        return Promise.resolve();
    }, t.prototype.su = function() {
        // No durable state to ensure is closed on shutdown.
        return this.Sc = !1, Promise.resolve();
    }, Object.defineProperty(t.prototype, "Nc", {
        get: function() {
            return this.Sc;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.xc = function() {
        // No op.
    }, t.prototype.Fc = function() {
        // No op.
    }, t.prototype.Ci = function() {
        return this.We;
    }, t.prototype.yi = function(t) {
        var e = this.bc[t.h()];
        return e || (e = new Hi(this.We, this.Hi), this.bc[t.h()] = e), e;
    }, t.prototype.vi = function() {
        return this.gi;
    }, t.prototype.pi = function() {
        return this.Qe;
    }, t.prototype.Di = function() {
        return this.Si;
    }, t.prototype.runTransaction = function(t, e, n) {
        var r = this;
        D("MemoryPersistence", "Starting transaction:", t);
        var i = new Zi(this.Cc.next());
        return this.Hi.Oc(), n(i).next((function(t) {
            return r.Hi.Lc(i).next((function() {
                return t;
            }));
        })).Me().then((function(t) {
            return i.$c(), t;
        }));
    }, t.prototype.kc = function(t, e) {
        return ur.Be(Object.values(this.bc).map((function(n) {
            return function() {
                return n.Mo(t, e);
            };
        })));
    }, t;
}(), Zi = /** @class */ function(e) {
    function n(t) {
        var n = this;
        return (n = e.call(this) || this).Gi = t, n;
    }
    /**
     * A base class representing a persistence transaction, encapsulating both the
     * transaction's sequence numbers as well as a list of onCommitted listeners.
     *
     * When you call Persistence.runTransaction(), it will create a transaction and
     * pass it to your callback. You then pass it to any method that operates
     * on persistence.
     */
    return t(n, e), n;
}(/** @class */ function() {
    function t() {
        this.Mc = [];
    }
    return t.prototype.Uc = function(t) {
        this.Mc.push(t);
    }, t.prototype.$c = function() {
        this.Mc.forEach((function(t) {
            return t();
        }));
    }, t;
}()), to = /** @class */ function() {
    function t(t) {
        this.persistence = t, 
        /** Tracks all documents that are active in Query views. */
        this.qc = new mi, 
        /** The list of documents that are potentially GCed after each transaction. */
        this.Bc = null;
    }
    return t.Qc = function(e) {
        return new t(e);
    }, Object.defineProperty(t.prototype, "jc", {
        get: function() {
            if (this.Bc) return this.Bc;
            throw O();
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.Do = function(t, e, n) {
        return this.qc.Do(n, e), this.jc.delete(n.toString()), ur.resolve();
    }, t.prototype.xo = function(t, e, n) {
        return this.qc.xo(n, e), this.jc.add(n.toString()), ur.resolve();
    }, t.prototype.Zu = function(t, e) {
        return this.jc.add(e.toString()), ur.resolve();
    }, t.prototype.removeTarget = function(t, e) {
        var n = this;
        this.qc.Lo(e.targetId).forEach((function(t) {
            return n.jc.add(t.toString());
        }));
        var r = this.persistence.vi();
        return r.tr(t, e.targetId).next((function(t) {
            t.forEach((function(t) {
                return n.jc.add(t.toString());
            }));
        })).next((function() {
            return r.mc(t, e);
        }));
    }, t.prototype.Oc = function() {
        this.Bc = new Set;
    }, t.prototype.Lc = function(t) {
        var e = this, n = this.persistence.pi().ki();
        // Remove newly orphaned documents.
                return ur.forEach(this.jc, (function(r) {
            var i = J.st(r);
            return e.Wc(t, i).next((function(t) {
                t || n.Yi(i);
            }));
        })).next((function() {
            return e.Bc = null, n.apply(t);
        }));
    }, t.prototype.zi = function(t, e) {
        var n = this;
        return this.Wc(t, e).next((function(t) {
            t ? n.jc.delete(e.toString()) : n.jc.add(e.toString());
        }));
    }, t.prototype.Dc = function(t) {
        // For eager GC, we don't care about the document size, there are no size thresholds.
        return 0;
    }, t.prototype.Wc = function(t, e) {
        var n = this;
        return ur.Be([ function() {
            return ur.resolve(n.qc.Mo(e));
        }, function() {
            return n.persistence.vi().Mo(t, e);
        }, function() {
            return n.persistence.kc(t, e);
        } ]);
    }, t;
}(), eo = /** @class */ function() {
    function t(t) {
        this.Gc = t.Gc, this.Kc = t.Kc;
    }
    return t.prototype.yr = function(t) {
        this.zc = t;
    }, t.prototype.Tr = function(t) {
        this.Hc = t;
    }, t.prototype.onMessage = function(t) {
        this.Yc = t;
    }, t.prototype.close = function() {
        this.Kc();
    }, t.prototype.send = function(t) {
        this.Gc(t);
    }, t.prototype.Jc = function() {
        this.zc();
    }, t.prototype.Xc = function(t) {
        this.Hc(t);
    }, t.prototype.Zc = function(t) {
        this.Yc(t);
    }, t;
}(), no = {
    BatchGetDocuments: "batchGet",
    Commit: "commit",
    RunQuery: "runQuery"
}, ro = /** @class */ function(e) {
    function n(t) {
        var n = this;
        return (n = e.call(this, t) || this).forceLongPolling = t.forceLongPolling, n.i = t.i, 
        n;
    }
    /**
     * Base class for all Rest-based connections to the backend (WebChannel and
     * HTTP).
     */
    return t(n, e), n.prototype.rh = function(t, e, n, r) {
        return new Promise((function(i, o) {
            var u = new p;
            u.listenOnce(d.COMPLETE, (function() {
                try {
                    switch (u.getLastErrorCode()) {
                      case v.NO_ERROR:
                        var e = u.getResponseJson();
                        D("Connection", "XHR received:", JSON.stringify(e)), i(e);
                        break;

                      case v.TIMEOUT:
                        D("Connection", 'RPC "' + t + '" timed out'), o(new S(R.DEADLINE_EXCEEDED, "Request time out"));
                        break;

                      case v.HTTP_ERROR:
                        var n = u.getStatus();
                        if (D("Connection", 'RPC "' + t + '" failed with status:', n, "response text:", u.getResponseText()), 
                        n > 0) {
                            var r = u.getResponseJson().error;
                            if (r && r.status && r.message) {
                                var s = function(t) {
                                    var e = t.toLowerCase().replace(/_/g, "-");
                                    return Object.values(R).indexOf(e) >= 0 ? e : R.UNKNOWN;
                                }(r.status);
                                o(new S(s, r.message));
                            } else o(new S(R.UNKNOWN, "Server responded with status " + u.getStatus()));
                        } else 
                        // If we received an HTTP_ERROR but there's no status code,
                        // it's most probably a connection issue
                        o(new S(R.UNAVAILABLE, "Connection failed."));
                        break;

                      default:
                        O();
                    }
                } finally {
                    D("Connection", 'RPC "' + t + '" completed.');
                }
            }));
            var s = JSON.stringify(r);
            u.send(e, "POST", s, n, 15);
        }));
    }, n.prototype.Vr = function(t, e) {
        var n = [ this.nh, "/", "google.firestore.v1.Firestore", "/", t, "/channel" ], r = y(), i = g(), o = {
            // Required for backend stickiness, routing behavior is based on this
            // parameter.
            httpSessionIdParam: "gsessionid",
            initMessageHeaders: {},
            messageUrlParams: {
                // This param is used to improve routing and project isolation by the
                // backend and must be included in every request.
                database: "projects/" + this.t.projectId + "/databases/" + this.t.database
            },
            sendRawJson: !0,
            supportsCrossDomainXhr: !0,
            internalChannelParams: {
                // Override the default timeout (randomized between 10-20 seconds) since
                // a large write batch on a slow internet connection may take a long
                // time to send to the backend. Rather than have WebChannel impose a
                // tight timeout which could lead to infinite timeouts and retries, we
                // set it very large (5-10 minutes) and rely on the browser's builtin
                // timeouts to kick in if the request isn't working.
                forwardChannelRequestTimeoutMs: 6e5
            },
            forceLongPolling: this.forceLongPolling,
            detectBufferingProxy: this.i
        };
        this.ih(o.initMessageHeaders, e), 
        // Sending the custom headers we just added to request.initMessageHeaders
        // (Authorization, etc.) will trigger the browser to make a CORS preflight
        // request because the XHR will no longer meet the criteria for a "simple"
        // CORS request:
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Simple_requests
        // Therefore to avoid the CORS preflight request (an extra network
        // roundtrip), we use the httpHeadersOverwriteParam option to specify that
        // the headers should instead be encoded into a special "$httpHeaders" query
        // parameter, which is recognized by the webchannel backend. This is
        // formally defined here:
        // https://github.com/google/closure-library/blob/b0e1815b13fb92a46d7c9b3c30de5d6a396a3245/closure/goog/net/rpc/httpcors.js#L32
        // TODO(b/145624756): There is a backend bug where $httpHeaders isn't respected if the request
        // doesn't have an Origin header. So we have to exclude a few browser environments that are
        // known to (sometimes) not include an Origin. See
        // https://github.com/firebase/firebase-js-sdk/issues/1491.
        s() || a() || c() || h() || f() || l() || (o.httpHeadersOverwriteParam = "$httpHeaders");
        var u = n.join("");
        D("Connection", "Creating WebChannel: " + u, o);
        var p = r.createWebChannel(u, o), d = !1, v = !1, E = new eo({
            Gc: function(t) {
                v ? D("Connection", "Not sending because WebChannel is closed:", t) : (d || (D("Connection", "Opening WebChannel transport."), 
                p.open(), d = !0), D("Connection", "WebChannel sending:", t), p.send(t));
            },
            Kc: function() {
                return p.close();
            }
        }), T = function(t, e, n) {
            // TODO(dimond): closure typing seems broken because WebChannel does
            // not implement goog.events.Listenable
            t.listen(e, (function(t) {
                try {
                    n(t);
                } catch (t) {
                    setTimeout((function() {
                        throw t;
                    }), 0);
                }
            }));
        };
        // WebChannel supports sending the first message with the handshake - saving
        // a network round trip. However, it will have to call send in the same
        // JS event loop as open. In order to enforce this, we delay actually
        // opening the WebChannel until send is called. Whether we have called
        // open is tracked with this variable.
                // Closure events are guarded and exceptions are swallowed, so catch any
        // exception and rethrow using a setTimeout so they become visible again.
        // Note that eventually this function could go away if we are confident
        // enough the code is exception free.
        return T(p, m.EventType.OPEN, (function() {
            v || D("Connection", "WebChannel transport opened.");
        })), T(p, m.EventType.CLOSE, (function() {
            v || (v = !0, D("Connection", "WebChannel transport closed"), E.Xc());
        })), T(p, m.EventType.ERROR, (function(t) {
            v || (v = !0, V("Connection", "WebChannel transport errored:", t), E.Xc(new S(R.UNAVAILABLE, "The operation could not be completed")));
        })), T(p, m.EventType.MESSAGE, (function(t) {
            var e;
            if (!v) {
                var n = t.data[0];
                P(!!n);
                // TODO(b/35143891): There is a bug in One Platform that caused errors
                // (and only errors) to be wrapped in an extra array. To be forward
                // compatible with the bug we need to check either condition. The latter
                // can be removed once the fix has been rolled out.
                // Use any because msgData.error is not typed.
                var r = n, i = r.error || (null === (e = r[0]) || void 0 === e ? void 0 : e.error);
                if (i) {
                    D("Connection", "WebChannel received error:", i);
                    // error.status will be a string like 'OK' or 'NOT_FOUND'.
                    var o = i.status, u = function(t) {
                        // lookup by string
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        var e = ut[t];
                        if (void 0 !== e) return ft(e);
                    }(o), s = i.message;
                    void 0 === u && (u = R.INTERNAL, s = "Unknown error status: " + o + " with message " + i.message), 
                    // Mark closed so no further events are propagated
                    v = !0, E.Xc(new S(u, s)), p.close();
                } else D("Connection", "WebChannel received:", n), E.Zc(n);
            }
        })), T(i, w.STAT_EVENT, (function(t) {
            t.stat === b.PROXY ? D("Connection", "Detected buffering proxy") : t.stat === b.NOPROXY && D("Connection", "Detected no buffering proxy");
        })), setTimeout((function() {
            // Technically we could/should wait for the WebChannel opened event,
            // but because we want to send the first message with the WebChannel
            // handshake we pretend the channel opened here (asynchronously), and
            // then delay the actual open until the first message is sent.
            E.Jc();
        }), 0), E;
    }, n;
}(/** @class */ function() {
    function t(t) {
        this.th = t, this.t = t.t;
        var e = t.ssl ? "https" : "http";
        this.nh = e + "://" + t.host, this.eh = "projects/" + this.t.projectId + "/databases/" + this.t.database + "/documents";
    }
    return t.prototype.$r = function(t, e, n, r) {
        var i = this.sh(t, e);
        D("RestConnection", "Sending: ", i, n);
        var o = {};
        return this.ih(o, r), this.rh(t, i, o, n).then((function(t) {
            return D("RestConnection", "Received: ", t), t;
        }), (function(e) {
            throw V("RestConnection", t + " failed with error: ", e, "url: ", i, "request:", n), 
            e;
        }));
    }, t.prototype.kr = function(t, e, n, r) {
        // The REST API automatically aggregates all of the streamed results, so we
        // can just use the normal invoke() method.
        return this.$r(t, e, n, r);
    }, 
    /**
     * Modifies the headers for a request, adding any authorization token if
     * present and any additional headers for the request.
     */
    t.prototype.ih = function(t, e) {
        if (t["X-Goog-Api-Client"] = "gl-js/ fire/8.1.2", 
        // Content-Type: text/plain will avoid preflight requests which might
        // mess with CORS and redirects by proxies. If we add custom headers
        // we will need to change this code to potentially use the $httpOverwrite
        // parameter supported by ESF to avoid triggering preflight requests.
        t["Content-Type"] = "text/plain", e) for (var n in e.m) e.m.hasOwnProperty(n) && (t[n] = e.m[n]);
    }, t.prototype.sh = function(t, e) {
        var n = no[t];
        return this.nh + "/v1/" + e + ":" + n;
    }, t;
}()), io = /** @class */ function() {
    function t() {
        var t = this;
        this.oh = function() {
            return t.uh();
        }, this.hh = function() {
            return t.ah();
        }, this.lh = [], this._h();
    }
    return t.prototype.so = function(t) {
        this.lh.push(t);
    }, t.prototype.su = function() {
        window.removeEventListener("online", this.oh), window.removeEventListener("offline", this.hh);
    }, t.prototype._h = function() {
        window.addEventListener("online", this.oh), window.addEventListener("offline", this.hh);
    }, t.prototype.uh = function() {
        D("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");
        for (var t = 0, e = this.lh; t < e.length; t++) {
            (0, e[t])(0 /* AVAILABLE */);
        }
    }, t.prototype.ah = function() {
        D("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");
        for (var t = 0, e = this.lh; t < e.length; t++) {
            (0, e[t])(1 /* UNAVAILABLE */);
        }
    }, 
    // TODO(chenbrian): Consider passing in window either into this component or
    // here for testing via FakeWindow.
    /** Checks that all used attributes of window are available. */
    t.fh = function() {
        return "undefined" != typeof window && void 0 !== window.addEventListener && void 0 !== window.removeEventListener;
    }, t;
}(), oo = /** @class */ function() {
    function t() {}
    return t.prototype.so = function(t) {
        // No-op.
    }, t.prototype.su = function() {
        // No-op.
    }, t;
}(), uo = /** @class */ function() {
    function t() {
        this.synchronizeTabs = !1;
    }
    return t.prototype.initialize = function(t) {
        return e(this, void 0, void 0, (function() {
            return n(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return this.serializer = ar(t.th.t), this.Vu = this.dh(t), this.persistence = this.wh(t), 
                    [ 4 /*yield*/ , this.persistence.start() ];

                  case 1:
                    return e.sent(), this.Eh = this.mh(t), this.zr = this.Th(t), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.mh = function(t) {
        return null;
    }, t.prototype.Th = function(t) {
        /** Manages our in-memory or durable persistence. */
        return e = this.persistence, n = new wr, r = t.Ah, i = this.serializer, new Ar(e, n, r, i);
        var e, n, r, i;
    }, t.prototype.wh = function(t) {
        return new $i(to.Qc, this.serializer);
    }, t.prototype.dh = function(t) {
        return new Ei;
    }, t.prototype.terminate = function() {
        return e(this, void 0, void 0, (function() {
            return n(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return this.Eh && this.Eh.stop(), [ 4 /*yield*/ , this.Vu.su() ];

                  case 1:
                    return t.sent(), [ 4 /*yield*/ , this.persistence.su() ];

                  case 2:
                    return t.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t;
}(), so = /** @class */ function() {
    function t() {}
    return t.prototype.initialize = function(t, r) {
        return e(this, void 0, void 0, (function() {
            var i = this;
            return n(this, (function(o) {
                switch (o.label) {
                  case 0:
                    return this.zr ? [ 3 /*break*/ , 2 ] : (this.zr = t.zr, this.Vu = t.Vu, this.Hr = this.Ih(r), 
                    this.Pu = this.Rh(r), this.yu = this.Ph(r), this.yh = this.Vh(r, 
                    /* startAsPrimary=*/ !t.synchronizeTabs), this.Vu.Mr = function(t) {
                        return Pi(i.yh, t, 1 /* SharedClientState */);
                    }, this.Pu.Yr.ph = Wi.bind(null, this.yh), [ 4 /*yield*/ , 
                    /**
                     * Toggles the network state when the client gains or loses its primary lease.
                     */
                    function(t, r) {
                        return e(this, void 0, void 0, (function() {
                            var e, i;
                            return n(this, (function(n) {
                                switch (n.label) {
                                  case 0:
                                    return e = L(t), r ? (e.Zr.delete(2 /* IsSecondary */), [ 4 /*yield*/ , xr(e) ]) : [ 3 /*break*/ , 2 ];

                                  case 1:
                                    return n.sent(), [ 3 /*break*/ , 5 ];

                                  case 2:
                                    return (i = r) ? [ 3 /*break*/ , 4 ] : (e.Zr.add(2 /* IsSecondary */), [ 4 /*yield*/ , Fr(e) ]);

                                  case 3:
                                    n.sent(), i = e.io.set("Unknown" /* Unknown */), n.label = 4;

                                  case 4:
                                    i, n.label = 5;

                                  case 5:
                                    return [ 2 /*return*/ ];
                                }
                            }));
                        }));
                    }(this.Pu, this.yh.$u) ]);

                  case 1:
                    o.sent(), o.label = 2;

                  case 2:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.Ph = function(t) {
        return new fi;
    }, t.prototype.Ih = function(t) {
        var e, n = ar(t.th.t), r = (e = t.th, new ro(e));
        /** Return the Platform-specific connectivity monitor. */ return function(t, e, n) {
            return new qr(t, e, n);
        }(t.credentials, r, n);
    }, t.prototype.Rh = function(t) {
        var e, n, r, i, o, u = this;
        return e = this.zr, n = this.Hr, r = t.Ns, i = function(t) {
            return Pi(u.yh, t, 0 /* RemoteStore */);
        }, o = io.fh() ? new io : new oo, new Mr(e, n, r, i, o);
    }, t.prototype.Vh = function(t, e) {
        return function(t, e, n, 
        // PORTING NOTE: Manages state synchronization in multi-tab environments.
        r, i, o, u) {
            var s = new Di(t, e, n, r, i, o);
            return u && (s.Lu = !0), s;
        }(this.zr, this.Pu, this.yu, this.Vu, t.Ah, t.pu, e);
    }, t.prototype.terminate = function() {
        return function(t) {
            return e(this, void 0, void 0, (function() {
                var e;
                return n(this, (function(n) {
                    switch (n.label) {
                      case 0:
                        return e = L(t), D("RemoteStore", "RemoteStore shutting down."), e.Zr.add(5 /* Shutdown */), 
                        [ 4 /*yield*/ , Fr(e) ];

                      case 1:
                        return n.sent(), e.eo.su(), 
                        // Set the OnlineState to Unknown (rather than Offline) to avoid potentially
                        // triggering spurious listener events with cached data, etc.
                        e.io.set("Unknown" /* Unknown */), [ 2 /*return*/ ];
                    }
                }));
            }));
        }(this.Pu);
    }, t;
}(), ao = /** @class */ function() {
    function t(t) {
        this.observer = t, 
        /**
             * When set to true, will not raise future events. Necessary to deal with
             * async detachment of listener.
             */
        this.muted = !1;
    }
    return t.prototype.next = function(t) {
        this.observer.next && this.gh(this.observer.next, t);
    }, t.prototype.error = function(t) {
        this.observer.error ? this.gh(this.observer.error, t) : console.error("Uncaught Error in snapshot listener:", t);
    }, t.prototype.bh = function() {
        this.muted = !0;
    }, t.prototype.gh = function(t, e) {
        var n = this;
        this.muted || setTimeout((function() {
            n.muted || t(e);
        }), 0);
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * The memory-only RemoteDocumentCache for IndexedDb. To construct, invoke
 * `newMemoryRemoteDocumentCache()`.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function co(t, e, n) {
    if (!n) throw new S(R.INVALID_ARGUMENT, "Function " + t + "() cannot be called with an empty " + e + ".");
}

function ho(t, e) {
    if (void 0 === e) return {
        merge: !1
    };
    if (void 0 !== e.mergeFields && void 0 !== e.merge) throw new S(R.INVALID_ARGUMENT, "Invalid options passed to function " + t + '(): You cannot specify both "merge" and "mergeFields".');
    return e;
}

/**
 * Validates that two boolean options are not set at the same time.
 */ function fo(t, e, n, r) {
    if (!0 === e && !0 === r) throw new S(R.INVALID_ARGUMENT, t + " and " + n + " cannot be used together.");
}

/**
 * Validates that `path` refers to a document (indicated by the fact it contains
 * an even numbers of segments).
 */ function lo(t) {
    if (!J.ot(t)) throw new S(R.INVALID_ARGUMENT, "Invalid document reference. Document references must have an even number of segments, but " + t + " has " + t.length + ".");
}

/**
 * Validates that `path` refers to a collection (indicated by the fact it
 * contains an odd numbers of segments).
 */ function po(t) {
    if (J.ot(t)) throw new S(R.INVALID_ARGUMENT, "Invalid collection reference. Collection references must have an odd number of segments, but " + t + " has " + t.length + ".");
}

/**
 * Returns true if it's a non-null object without a custom prototype
 * (i.e. excludes Array, Date, etc.).
 */
/** Returns a string describing the type / value of the provided input. */ function vo(t) {
    if (void 0 === t) return "undefined";
    if (null === t) return "null";
    if ("string" == typeof t) return t.length > 20 && (t = t.substring(0, 20) + "..."), 
    JSON.stringify(t);
    if ("number" == typeof t || "boolean" == typeof t) return "" + t;
    if ("object" == typeof t) {
        if (t instanceof Array) return "an array";
        var e = 
        /** Hacky method to try to get the constructor name for an object. */
        function(t) {
            if (t.constructor) {
                var e = /function\s+([^\s(]+)\s*\(/.exec(t.constructor.toString());
                if (e && e.length > 1) return e[1];
            }
            return null;
        }(t);
        return e ? "a custom " + e + " object" : "an object";
    }
    return "function" == typeof t ? "a function" : O();
}

function yo(t, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
e) {
    if ("_delegate" in t && (
    // Unwrap Compat types
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    t = t.Ch), !(t instanceof e)) {
        if (e.name === t.constructor.name) throw new S(R.INVALID_ARGUMENT, "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");
        var n = vo(t);
        throw new S(R.INVALID_ARGUMENT, "Expected type '" + e.name + "', but it was: " + n);
    }
    return t;
}

function go(t, e) {
    if (e <= 0) throw new S(R.INVALID_ARGUMENT, "Function " + t + "() requires a positive number, but it was: " + e + ".");
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Sentinel values that can be used when writing document fields with `set()`
 * or `update()`.
 */ var mo = 
/**
     * @param _methodName - The public API endpoint that returns this class.
     */
function(t) {
    this._methodName = t;
}, wo = /** @class */ function(e) {
    function n() {
        return null !== e && e.apply(this, arguments) || this;
    }
    return t(n, e), n.prototype.Sh = function(t) {
        if (2 /* MergeSet */ !== t.Dh) throw 1 /* Update */ === t.Dh ? t.Nh(this._methodName + "() can only appear at the top level of your update data") : t.Nh(this._methodName + "() cannot be used with set() unless you pass {merge:true}");
        // No transform to add for a delete, but we need to add it to our
        // fieldMask so it gets deleted.
                return t.ee.push(t.path), null;
    }, n.prototype.isEqual = function(t) {
        return t instanceof n;
    }, n;
}(mo);

/**
 * Returns a sentinel for use with {@link updateDoc} or
 * {@link setDoc} with `{merge: true}` to mark a field for deletion.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Creates a child context for parsing SerializableFieldValues.
 *
 * This is different than calling `ParseContext.contextWith` because it keeps
 * the fieldTransforms and fieldMask separate.
 *
 * The created context has its `dataSource` set to `UserDataSource.Argument`.
 * Although these values are used with writes, any elements in these FieldValues
 * are not considered writes since they cannot contain any FieldValue sentinels,
 * etc.
 *
 * @param fieldValue - The sentinel FieldValue for which to create a child
 *     context.
 * @param context - The parent context.
 * @param arrayElement - Whether or not the FieldValue has an array.
 */
function bo(t, e, n) {
    return new Tu({
        Dh: 3 /* Argument */ ,
        xh: e.settings.xh,
        methodName: t._methodName,
        Fh: n
    }, e.t, e.serializer, e.ignoreUndefinedProperties);
}

var Eo = /** @class */ function(e) {
    function n() {
        return null !== e && e.apply(this, arguments) || this;
    }
    return t(n, e), n.prototype.Sh = function(t) {
        return new tn(t.path, new We);
    }, n.prototype.isEqual = function(t) {
        return t instanceof n;
    }, n;
}(mo), To = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this, t) || this).Oh = n, r;
    }
    return t(n, e), n.prototype.Sh = function(t) {
        var e = bo(this, t, 
        /*array=*/ !0), n = this.Oh.map((function(t) {
            return ku(t, e);
        })), r = new Ye(n);
        return new tn(t.path, r);
    }, n.prototype.isEqual = function(t) {
        // TODO(mrschmidt): Implement isEquals
        return this === t;
    }, n;
}(mo), No = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this, t) || this).Oh = n, r;
    }
    return t(n, e), n.prototype.Sh = function(t) {
        var e = bo(this, t, 
        /*array=*/ !0), n = this.Oh.map((function(t) {
            return ku(t, e);
        })), r = new Qe(n);
        return new tn(t.path, r);
    }, n.prototype.isEqual = function(t) {
        // TODO(mrschmidt): Implement isEquals
        return this === t;
    }, n;
}(mo), Io = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this, t) || this).Lh = n, r;
    }
    return t(n, e), n.prototype.Sh = function(t) {
        var e = new Ke(t.serializer, pe(t.serializer, this.Lh));
        return new tn(t.path, e);
    }, n.prototype.isEqual = function(t) {
        // TODO(mrschmidt): Implement isEquals
        return this === t;
    }, n;
}(mo), Ao = /** @class */ function() {
    /**
     * Creates a new immutable `GeoPoint` object with the provided latitude and
     * longitude values.
     * @param latitude - The latitude as number between -90 and 90.
     * @param longitude - The longitude as number between -180 and 180.
     */
    function t(t, e) {
        if (!isFinite(t) || t < -90 || t > 90) throw new S(R.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + t);
        if (!isFinite(e) || e < -180 || e > 180) throw new S(R.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + e);
        this.$h = t, this.kh = e;
    }
    return Object.defineProperty(t.prototype, "latitude", {
        /**
         * The latitude of this `GeoPoint` instance.
         */
        get: function() {
            return this.$h;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "longitude", {
        /**
         * The longitude of this `GeoPoint` instance.
         */
        get: function() {
            return this.kh;
        },
        enumerable: !1,
        configurable: !0
    }), 
    /**
     * Returns true if this `GeoPoint` is equal to the provided one.
     *
     * @param other - The `GeoPoint` to compare against.
     * @returns true if this `GeoPoint` is equal to the provided one.
     */
    t.prototype.isEqual = function(t) {
        return this.$h === t.$h && this.kh === t.kh;
    }, t.prototype.toJSON = function() {
        return {
            latitude: this.$h,
            longitude: this.kh
        };
    }, 
    /**
     * Actually private to JS consumers of our API, so this function is prefixed
     * with an underscore.
     */
    t.prototype.D = function(t) {
        return G(this.$h, t.$h) || G(this.kh, t.kh);
    }, t;
}(), Co = /** @class */ function() {
    /** @hideconstructor */
    function t(t) {
        this.Mh = t;
    }
    /**
     * Creates a new `Bytes` object from the given Base64 string, converting it to
     * bytes.
     *
     * @param base64 - The Base64 string used to create the `Bytes` object.
     */    return t.fromBase64String = function(e) {
        try {
            return new t(ot.fromBase64String(e));
        } catch (e) {
            throw new S(R.INVALID_ARGUMENT, "Failed to construct data from Base64 string: " + e);
        }
    }, 
    /**
     * Creates a new `Bytes` object from the given Uint8Array.
     *
     * @param array - The Uint8Array used to create the `Bytes` object.
     */
    t.fromUint8Array = function(e) {
        return new t(ot.fromUint8Array(e));
    }, 
    /**
     * Returns the underlying bytes as a Base64-encoded string.
     *
     * @returns The Base64-encoded string created from the `Bytes` object.
     */
    t.prototype.toBase64 = function() {
        return this.Mh.toBase64();
    }, 
    /**
     * Returns the underlying bytes in a new `Uint8Array`.
     *
     * @returns The Uint8Array created from the `Bytes` object.
     */
    t.prototype.toUint8Array = function() {
        return this.Mh.toUint8Array();
    }, 
    /**
     * Returns a string representation of the `Bytes` object.
     *
     * @returns A string representation of the `Bytes` object.
     */
    t.prototype.toString = function() {
        return "Bytes(base64: " + this.toBase64() + ")";
    }, 
    /**
     * Returns true if this `Bytes` object is equal to the provided one.
     *
     * @param other - The `Bytes` object to compare against.
     * @returns true if this `Bytes` object is equal to the provided one.
     */
    t.prototype.isEqual = function(t) {
        return this.Mh.isEqual(t.Mh);
    }, t;
}(), Do = function(t) {
    this.Ch = t;
}, ko = new Map, Vo = /** @class */ function() {
    function t(t) {
        var e;
        if (void 0 === t.host) {
            if (void 0 !== t.ssl) throw new S(R.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
            this.host = "firestore.googleapis.com", this.ssl = !0;
        } else this.host = t.host, this.ssl = null === (e = t.ssl) || void 0 === e || e;
        if (this.credentials = t.credentials, this.ignoreUndefinedProperties = !!t.ignoreUndefinedProperties, 
        void 0 === t.cacheSizeBytes) this.cacheSizeBytes = 41943040; else {
            if (-1 !== t.cacheSizeBytes && t.cacheSizeBytes < 1048576) throw new S(R.INVALID_ARGUMENT, "cacheSizeBytes must be at least 1048576");
            this.cacheSizeBytes = t.cacheSizeBytes;
        }
        this.experimentalForceLongPolling = !!t.experimentalForceLongPolling, this.experimentalAutoDetectLongPolling = !!t.experimentalAutoDetectLongPolling, 
        fo("experimentalForceLongPolling", t.experimentalForceLongPolling, "experimentalAutoDetectLongPolling", t.experimentalAutoDetectLongPolling);
    }
    return t.prototype.isEqual = function(t) {
        return this.host === t.host && this.ssl === t.ssl && this.credentials === t.credentials && this.cacheSizeBytes === t.cacheSizeBytes && this.experimentalForceLongPolling === t.experimentalForceLongPolling && this.experimentalAutoDetectLongPolling === t.experimentalAutoDetectLongPolling && this.ignoreUndefinedProperties === t.ignoreUndefinedProperties;
    }, t;
}(), _o = /** @class */ function() {
    /** @hideconstructor */
    function t(t, e) {
        this.Uh = "(lite)", this.qh = new Vo({}), this.Bh = !1, t instanceof N ? (this.Qh = t, 
        this.jh = new q) : (this.Wh = t, this.Qh = function(t) {
            if (!Object.prototype.hasOwnProperty.apply(t.options, [ "projectId" ])) throw new S(R.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
            return new N(t.options.projectId);
        }(t), this.jh = new j(e));
    }
    return Object.defineProperty(t.prototype, "app", {
        /**
         * The {@link FirebaseApp} associated with this `Firestore` service
         * instance.
         */
        get: function() {
            if (!this.Wh) throw new S(R.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
            return this.Wh;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "Gh", {
        get: function() {
            return this.Bh;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "Kh", {
        get: function() {
            return void 0 !== this.zh;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.Hh = function(t) {
        if (this.Bh) throw new S(R.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");
        this.qh = new Vo(t), void 0 !== t.credentials && (this.jh = function(t) {
            if (!t) return new q;
            switch (t.type) {
              case "gapi":
                var e = t.client;
                // Make sure this really is a Gapi client.
                                return P(!("object" != typeof e || null === e || !e.auth || !e.auth.getAuthHeaderValueForFirstParty)), 
                new x(e, t.sessionIndex || "0");

              case "provider":
                return t.client;

              default:
                throw new S(R.INVALID_ARGUMENT, "makeCredentialsProvider failed due to invalid credential type");
            }
        }(t.credentials));
    }, t.prototype.Yh = function() {
        return this.qh;
    }, t.prototype.Jh = function() {
        return this.Bh = !0, this.qh;
    }, t.prototype._delete = function() {
        return this.zh || (this.zh = this.Xh()), this.zh;
    }, 
    /**
     * Terminates all components used by this client. Subclasses can override
     * this method to clean up their own dependencies, but must also call this
     * method.
     *
     * Only ever called once.
     */
    t.prototype.Xh = function() {
        /**
 * Removes all components associated with the provided instance. Must be called
 * when the `Firestore` instance is terminated.
 */
        return function(t) {
            var e = ko.get(t);
            e && (D("ComponentProvider", "Removing Datastore"), ko.delete(t), e.terminate());
        }(this), Promise.resolve();
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Helper function to assert Uint8Array is available at runtime. */
function Oo() {
    if ("undefined" == typeof Uint8Array) throw new S(R.UNIMPLEMENTED, "Uint8Arrays are not available in this environment.");
}

/** Helper function to assert Base64 functions are available at runtime. */ function Po() {
    if ("undefined" == typeof atob) throw new S(R.UNIMPLEMENTED, "Blobs are unavailable in Firestore in this environment.");
}

/** Immutable class holding a blob (binary data) */ var Lo = /** @class */ function(e) {
    function n() {
        return null !== e && e.apply(this, arguments) || this;
    }
    return t(n, e), n.fromBase64String = function(t) {
        return Po(), new n(Co.fromBase64String(t));
    }, n.fromUint8Array = function(t) {
        return Oo(), new n(Co.fromUint8Array(t));
    }, n.prototype.toBase64 = function() {
        return Po(), this.Ch.toBase64();
    }, n.prototype.toUint8Array = function() {
        return Oo(), this.Ch.toUint8Array();
    }, n.prototype.isEqual = function(t) {
        return this.Ch.isEqual(t.Ch);
    }, n.prototype.toString = function() {
        return "Blob(base64: " + this.toBase64() + ")";
    }, n;
}(Do), Ro = /** @class */ function() {
    function t() {}
    return t.prototype.Zh = function(t, e) {
        switch (void 0 === e && (e = "none"), Yt(t)) {
          case 0 /* NullValue */ :
            return null;

          case 1 /* BooleanValue */ :
            return t.booleanValue;

          case 2 /* NumberValue */ :
            return te(t.integerValue || t.doubleValue);

          case 3 /* TimestampValue */ :
            return this.ta(t.timestampValue);

          case 4 /* ServerTimestampValue */ :
            return this.na(t, e);

          case 5 /* StringValue */ :
            return t.stringValue;

          case 6 /* BlobValue */ :
            return this.ea(ee(t.bytesValue));

          case 7 /* RefValue */ :
            return this.sa(t.referenceValue);

          case 8 /* GeoPointValue */ :
            return this.ia(t.geoPointValue);

          case 9 /* ArrayValue */ :
            return this.ra(t.arrayValue, e);

          case 10 /* ObjectValue */ :
            return this.oa(t.mapValue, e);

          default:
            throw O();
        }
    }, t.prototype.oa = function(t, e) {
        var n = this, r = {};
        return xt(t.fields || {}, (function(t, i) {
            r[t] = n.Zh(i, e);
        })), r;
    }, t.prototype.ia = function(t) {
        return new Ao(te(t.latitude), te(t.longitude));
    }, t.prototype.ra = function(t, e) {
        var n = this;
        return (t.values || []).map((function(t) {
            return n.Zh(t, e);
        }));
    }, t.prototype.na = function(t, e) {
        switch (e) {
          case "previous":
            var n = Gt(t);
            return null == n ? null : this.Zh(n, e);

          case "estimate":
            return this.ta(Bt(t));

          default:
            return null;
        }
    }, t.prototype.ta = function(t) {
        var e = Zt(t);
        return new W(e.seconds, e.nanos);
    }, t.prototype.ua = function(t, e) {
        var n = Q.J(t);
        P(xe(n));
        var r = new N(n.get(1), n.get(3)), i = new J(n.U(5));
        return r.isEqual(e) || 
        // TODO(b/64130202): Somehow support foreign references.
        k("Document " + i + " contains a document reference within a different database (" + r.projectId + "/" + r.database + ") which is not supported. It will be treated as a reference in the current database (" + e.projectId + "/" + e.database + ") instead."), 
        i;
    }, t;
}(), So = /** @class */ function(e) {
    function n(t) {
        var n = this;
        return (n = e.call(this) || this).firestore = t, n;
    }
    return t(n, e), n.prototype.ea = function(t) {
        return new Lo(new Co(t));
    }, n.prototype.sa = function(t) {
        var e = this.ua(t, this.firestore.Qh);
        return us.ca(e, this.firestore, /* converter= */ null);
    }, n;
}(Ro), Uo = /** @class */ function() {
    // Note: This class is stripped down version of the DocumentSnapshot in
    // the legacy SDK. The changes are:
    // - No support for SnapshotMetadata.
    // - No support for SnapshotOptions.
    /** @hideconstructor protected */
    function t(t, e, n, r, i) {
        this.ha = t, this.aa = e, this.la = n, this._a = r, this.fa = i;
    }
    return Object.defineProperty(t.prototype, "id", {
        /** Property of the `DocumentSnapshot` that provides the document's ID. */ get: function() {
            return this.la.path.j();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "ref", {
        /**
         * The `DocumentReference` for the document included in the `DocumentSnapshot`.
         */
        get: function() {
            return new Jo(this.ha, this.fa, this.la);
        },
        enumerable: !1,
        configurable: !0
    }), 
    /**
     * Signals whether or not the document at the snapshot's location exists.
     *
     * @returns true if the document exists.
     */
    t.prototype.exists = function() {
        return null !== this._a;
    }, 
    /**
     * Retrieves all fields in the document as an `Object`. Returns `undefined` if
     * the document doesn't exist.
     *
     * @returns An `Object` containing all fields in the document or `undefined`
     * if the document doesn't exist.
     */
    t.prototype.data = function() {
        if (this._a) {
            if (this.fa) {
                // We only want to use the converter and create a new DocumentSnapshot
                // if a converter has been provided.
                var t = new qo(this.ha, this.aa, this.la, this._a, 
                /* converter= */ null);
                return this.fa.fromFirestore(t);
            }
            return this.aa.Zh(this._a.Ee());
        }
    }, 
    /**
     * Retrieves the field specified by `fieldPath`. Returns `undefined` if the
     * document or field doesn't exist.
     *
     * @param fieldPath - The path (for example 'foo' or 'foo.bar') to a specific
     * field.
     * @returns The data at the specified field location or undefined if no such
     * field exists in the document.
     */
    // We are using `any` here to avoid an explicit cast by our users.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    t.prototype.get = function(t) {
        if (this._a) {
            var e = this._a.data().field(jo("DocumentSnapshot.get", t));
            if (null !== e) return this.aa.Zh(e);
        }
    }, t;
}(), qo = /** @class */ function(e) {
    function n() {
        return null !== e && e.apply(this, arguments) || this;
    }
    /**
     * Retrieves all fields in the document as an `Object`.
     *
     * @override
     * @returns An `Object` containing all fields in the document.
     */    return t(n, e), n.prototype.data = function() {
        return e.prototype.data.call(this);
    }, n;
}(Uo);

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Converts Firestore's internal types to the JavaScript types that we expose
 * to the user.
 */
/**
 * Helper that calls fromDotSeparatedString() but wraps any error thrown.
 */
function jo(t, e) {
    return "string" == typeof e ? Ru(t, e) : e instanceof Do ? e.Ch.da : e.da;
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A `FieldPath` refers to a field in a document. The path may consist of a
 * single field name (referring to a top-level field in the document), or a
 * list of field names (referring to a nested field in the document).
 *
 * Create a `FieldPath` by providing field names. If more than one field
 * name is provided, the path will point to a nested field in a document.
 */ var Mo = /** @class */ function() {
    /**
     * Creates a FieldPath from the provided field names. If more than one field
     * name is provided, the path will point to a nested field in a document.
     *
     * @param fieldNames - A list of field names.
     */
    function t() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        for (var n = 0; n < t.length; ++n) if (0 === t[n].length) throw new S(R.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");
        this.da = new K(t);
    }
    /**
     * Returns true if this `FieldPath` is equal to the provided one.
     *
     * @param other - The `FieldPath` to compare against.
     * @returns true if this `FieldPath` is equal to the provided one.
     */    return t.prototype.isEqual = function(t) {
        return this.da.isEqual(t.da);
    }, t;
}(), xo = /** @class */ function(e) {
    /** @hideconstructor */
    function n(t, n) {
        var r = this;
        return (r = e.call(this, t, n) || this).wa = new gr, r.Uh = "name" in t ? t.name : "[DEFAULT]", 
        r;
    }
    return t(n, e), n.prototype.Xh = function() {
        return this.Ea || 
        // The client must be initialized to ensure that all subsequent API
        // usage throws an exception.
        rs(this), this.Ea.terminate();
    }, n;
}(_o);

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * The Cloud Firestore service interface.
 *
 * Do not call this constructor directly. Instead, use {@link getFirestore}.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A `DocumentSnapshot` contains data read from a document in your Firestore
 * database. The data can be extracted with `.data()` or `.get(<field>)` to
 * get a specific field.
 *
 * For a `DocumentSnapshot` that points to a non-existing document, any data
 * access will return 'undefined'. You can use the `exists()` method to
 * explicitly verify a document's existence.
 */
var Fo = /** @class */ function(e) {
    /** @hideconstructor protected */
    function n(t, n, r, i, o, u) {
        var s = this;
        return (s = e.call(this, t, n, r, i, u) || this).ha = t, s.ma = t, s.metadata = o, 
        s;
    }
    /**
     * Property of the `DocumentSnapshot` that signals whether or not the data
     * exists. True if the document exists.
     */    return t(n, e), n.prototype.exists = function() {
        return e.prototype.exists.call(this);
    }, 
    /**
     * Retrieves all fields in the document as an `Object`. Returns `undefined` if
     * the document doesn't exist.
     *
     * By default, `FieldValue.serverTimestamp()` values that have not yet been
     * set to their final value will be returned as `null`. You can override
     * this by passing an options object.
     *
     * @param options - An options object to configure how data is retrieved from
     * the snapshot (for example the desired behavior for server timestamps that
     * have not yet been set to their final value).
     * @returns An `Object` containing all fields in the document or `undefined` if
     * the document doesn't exist.
     */
    n.prototype.data = function(t) {
        if (void 0 === t && (t = {}), this._a) {
            if (this.fa) {
                // We only want to use the converter and create a new DocumentSnapshot
                // if a converter has been provided.
                var e = new zo(this.ha, this.aa, this.la, this._a, this.metadata, 
                /* converter= */ null);
                return this.fa.fromFirestore(e, t);
            }
            return this.aa.Zh(this._a.Ee(), t.serverTimestamps);
        }
    }, 
    /**
     * Retrieves the field specified by `fieldPath`. Returns `undefined` if the
     * document or field doesn't exist.
     *
     * By default, a `FieldValue.serverTimestamp()` that has not yet been set to
     * its final value will be returned as `null`. You can override this by
     * passing an options object.
     *
     * @param fieldPath - The path (for example 'foo' or 'foo.bar') to a specific
     * field.
     * @param options - An options object to configure how the field is retrieved
     * from the snapshot (for example the desired behavior for server timestamps
     * that have not yet been set to their final value).
     * @returns The data at the specified field location or undefined if no such
     * field exists in the document.
     */
    // We are using `any` here to avoid an explicit cast by our users.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    n.prototype.get = function(t, e) {
        if (void 0 === e && (e = {}), this._a) {
            var n = this._a.data().field(jo("DocumentSnapshot.get", t));
            if (null !== n) return this.aa.Zh(n, e.serverTimestamps);
        }
    }, n;
}(Uo), zo = /** @class */ function(e) {
    function n() {
        return null !== e && e.apply(this, arguments) || this;
    }
    /**
     * Retrieves all fields in the document as an `Object`.
     *
     * By default, `FieldValue.serverTimestamp()` values that have not yet been
     * set to their final value will be returned as `null`. You can override
     * this by passing an options object.
     *
     * @override
     * @param options - An options object to configure how data is retrieved from
     * the snapshot (for example the desired behavior for server timestamps that
     * have not yet been set to their final value).
     * @returns An `Object` containing all fields in the document.
     */    return t(n, e), n.prototype.data = function(t) {
        return void 0 === t && (t = {}), e.prototype.data.call(this, t);
    }, n;
}(Fo), Go = /** @class */ function() {
    /** @hideconstructor */
    function t(t, e, n, r) {
        this.ha = t, this.aa = e, this.Ta = r, this.metadata = new hs(r.hasPendingWrites, r.fromCache), 
        this.query = n;
    }
    return Object.defineProperty(t.prototype, "docs", {
        /** An array of all the documents in the `QuerySnapshot`. */ get: function() {
            var t = [];
            return this.forEach((function(e) {
                return t.push(e);
            })), t;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "size", {
        /** The number of documents in the `QuerySnapshot`. */ get: function() {
            return this.Ta.docs.size;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "empty", {
        /** True if there are no documents in the `QuerySnapshot`. */ get: function() {
            return 0 === this.size;
        },
        enumerable: !1,
        configurable: !0
    }), 
    /**
     * Enumerates all of the documents in the `QuerySnapshot`.
     *
     * @param callback - A callback to be called with a `QueryDocumentSnapshot` for
     * each document in the snapshot.
     * @param thisArg - The `this` binding for the callback.
     */
    t.prototype.forEach = function(t, e) {
        var n = this;
        this.Ta.docs.forEach((function(r) {
            t.call(e, new zo(n.ha, n.aa, r.key, r, new hs(n.Ta.nn.has(r.key), n.Ta.fromCache), n.query.fa));
        }));
    }, 
    /**
     * Returns an array of the documents changes since the last snapshot. If this
     * is the first snapshot, all documents will be in the list as 'added'
     * changes.
     *
     * @param options - `SnapshotListenOptions` that control whether metadata-only
     * changes (i.e. only `DocumentSnapshot.metadata` changed) should trigger
     * snapshot events.
     */
    t.prototype.docChanges = function(t) {
        void 0 === t && (t = {});
        var e = !!t.includeMetadataChanges;
        if (e && this.Ta.sn) throw new S(R.INVALID_ARGUMENT, "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");
        return this.Aa && this.Ia === e || (this.Aa = 
        /** Calculates the array of DocumentChanges for a given ViewSnapshot. */
        function(t, e) {
            if (t.Ta.tn.W()) {
                // Special case the first snapshot because index calculation is easy and
                // fast
                var n = 0;
                return t.Ta.docChanges.map((function(e) {
                    var r = new zo(t.ha, t.aa, e.doc.key, e.doc, new hs(t.Ta.nn.has(e.doc.key), t.Ta.fromCache), t.query.fa);
                    return e.doc, {
                        type: "added",
                        doc: r,
                        oldIndex: -1,
                        newIndex: n++
                    };
                }));
            }
            // A DocumentSet that is updated incrementally as changes are applied to use
            // to lookup the index of a document.
            var r = t.Ta.tn;
            return t.Ta.docChanges.filter((function(t) {
                return e || 3 /* Metadata */ !== t.type;
            })).map((function(e) {
                var n = new zo(t.ha, t.aa, e.doc.key, e.doc, new hs(t.Ta.nn.has(e.doc.key), t.Ta.fromCache), t.query.fa), i = -1, o = -1;
                return 0 /* Added */ !== e.type && (i = r.indexOf(e.doc.key), r = r.delete(e.doc.key)), 
                1 /* Removed */ !== e.type && (o = (r = r.add(e.doc)).indexOf(e.doc.key)), {
                    type: Bo(e.type),
                    doc: n,
                    oldIndex: i,
                    newIndex: o
                };
            }));
        }(this, e), this.Ia = e), this.Aa;
    }, t;
}();

/**
 * A `QueryDocumentSnapshot` contains data read from a document in your
 * Firestore database as part of a query. The document is guaranteed to exist
 * and its data can be extracted with `.data()` or `.get(<field>)` to get a
 * specific field.
 *
 * A `QueryDocumentSnapshot` offers the same API surface as a
 * `DocumentSnapshot`. Since query results contain only existing documents, the
 * `exists` property will always be true and `data()` will never return
 * 'undefined'.
 */ function Bo(t) {
    switch (t) {
      case 0 /* Added */ :
        return "added";

      case 2 /* Modified */ :
      case 3 /* Metadata */ :
        return "modified";

      case 1 /* Removed */ :
        return "removed";

      default:
        return O();
    }
}

// TODO(firestoreexp): Add tests for snapshotEqual with different snapshot
// metadata
/**
 * Returns true if the provided snapshots are equal.
 *
 * @param left - A snapshot to compare.
 * @param right - A snapshot to compare.
 * @returns true if the snapshots are equal.
 */ function Wo(t, e) {
    return t instanceof Fo && e instanceof Fo ? t.ha === e.ha && t.la.isEqual(e.la) && (null === t._a ? null === e._a : t._a.isEqual(e._a)) && t.fa === e.fa : t instanceof Go && e instanceof Go && t.ha === e.ha && yu(t.query, e.query) && t.metadata.isEqual(e.metadata) && t.Ta.isEqual(e.Ta);
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Reads the document referred to by this `DocumentReference`.
 *
 * Note: `getDoc()` attempts to provide up-to-date data when possible by waiting
 * for data from the server, but it may return cached data or fail if you are
 * offline and the server cannot be reached. To specify this behavior, invoke
 * {@link getDocFromCache} or {@link getDocFromServer}.
 *
 * @param reference - The reference of the document to fetch.
 * @returns A Promise resolved with a `DocumentSnapshot` containing the
 * current document contents.
 */ var Yo = /** @class */ function(e) {
    function n(t) {
        var n = this;
        return (n = e.call(this) || this).firestore = t, n;
    }
    return t(n, e), n.prototype.ea = function(t) {
        return new Co(t);
    }, n.prototype.sa = function(t) {
        var e = this.ua(t, this.firestore.Qh);
        return new Jo(this.firestore, /* converter= */ null, e);
    }, n;
}(Ro);

/**
 * Reads the document referred to by this `DocumentReference` from cache.
 * Returns an error if the document is not currently cached.
 *
 * @returns A Promise resolved with a `DocumentSnapshot` containing the
 * current document contents.
 */
/**
 * Executes the query and returns the results as a `QuerySnapshot` from the
 * server. Returns an error if the network is not available.
 *
 * @returns A Promise that will be resolved with the results of the query.
 */
function Ho(t, e, n) {
    for (var r = [], i = 3; i < arguments.length; i++) r[i - 3] = arguments[i];
    t = yo(t, Jo);
    var o = yo(t.firestore, xo), u = gu(o);
    // For Compat types, we have to "extract" the underlying types before
    // performing validation.
    return e instanceof Do && (e = e.Ch), Xo(o, ("string" == typeof e || e instanceof Mo ? Cu(u, "updateDoc", t.la, e, n, r) : Au(u, "updateDoc", t.la, e)).Pa(t.la, nn.exists(!0)));
}

/**
 * Deletes the document referred to by the specified `DocumentReference`.
 *
 * @param reference - A reference to the document to delete.
 * @returns A Promise resolved once the document has been successfully
 * deleted from the backend (note that it won't resolve while you're offline).
 */ function Qo(t) {
    for (var r, i, o, u = [], s = 1; s < arguments.length; s++) u[s - 1] = arguments[s];
    t instanceof Do && (t = t.Ch);
    var a = {
        includeMetadataChanges: !1
    }, c = 0;
    "object" != typeof u[c] || cr(u[c]) || (a = u[c], c++);
    var h, f, l, p = {
        includeMetadataChanges: a.includeMetadataChanges
    };
    if (cr(u[c])) {
        var d = u[c];
        u[c] = null === (r = d.next) || void 0 === r ? void 0 : r.bind(d), u[c + 1] = null === (i = d.error) || void 0 === i ? void 0 : i.bind(d), 
        u[c + 2] = null === (o = d.complete) || void 0 === o ? void 0 : o.bind(d);
    }
    if (t instanceof Jo) f = yo(t.firestore, xo), l = Dn(t.la.path), h = {
        next: function(e) {
            u[c] && u[c](Ko(f, t, e));
        },
        error: u[c + 1],
        complete: u[c + 2]
    }; else {
        var v = yo(t, $o);
        f = yo(v.firestore, xo), l = v.Ra;
        var y = new Yo(f);
        h = {
            next: function(t) {
                u[c] && u[c](new Go(f, y, v, t));
            },
            error: u[c + 1],
            complete: u[c + 2]
        }, hu(t.Ra);
    }
    return function(t, r, i, o) {
        var u = this, s = new ao(o), a = new gi(r, s, i);
        return t.Ns.Ms((function() {
            return e(u, void 0, void 0, (function() {
                var e;
                return n(this, (function(n) {
                    switch (n.label) {
                      case 0:
                        return e = li, [ 4 /*yield*/ , Hu(t) ];

                      case 1:
                        return [ 2 /*return*/ , e.apply(void 0, [ n.sent(), a ]) ];
                    }
                }));
            }));
        })), function() {
            s.bh(), t.Ns.Ms((function() {
                return e(u, void 0, void 0, (function() {
                    var e;
                    return n(this, (function(n) {
                        switch (n.label) {
                          case 0:
                            return e = pi, [ 4 /*yield*/ , Hu(t) ];

                          case 1:
                            return [ 2 /*return*/ , e.apply(void 0, [ n.sent(), a ]) ];
                        }
                    }));
                }));
            }));
        };
    }(ns(f), l, p, h);
}

/** Locally writes `mutations` on the async queue. */ function Xo(t, r) {
    return function(t, r) {
        var i = this, o = new sr;
        return t.Ns.Ms((function() {
            return e(i, void 0, void 0, (function() {
                var e;
                return n(this, (function(n) {
                    switch (n.label) {
                      case 0:
                        return e = _i, [ 4 /*yield*/ , Yu(t) ];

                      case 1:
                        return [ 2 /*return*/ , e.apply(void 0, [ n.sent(), r, o ]) ];
                    }
                }));
            }));
        })), o.promise;
    }(ns(t), r);
}

/**
 * Converts a ViewSnapshot that contains the single document specified by `ref`
 * to a DocumentSnapshot.
 */ function Ko(t, e, n) {
    var r = n.docs.get(e.la), i = new Yo(t);
    return new Fo(t, i, e.la, r, new hs(n.hasPendingWrites, n.fromCache), e.fa);
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A `DocumentReference` refers to a document location in a Firestore database
 * and can be used to write, read, or listen to the location. The document at
 * the referenced location may or may not exist.
 */ var Jo = /** @class */ function() {
    /** @hideconstructor */
    function t(t, e, n) {
        this.fa = e, this.la = n, 
        /** The type of this Firestore reference. */
        this.type = "document", this.firestore = t;
    }
    return Object.defineProperty(t.prototype, "ya", {
        get: function() {
            return this.la.path;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "id", {
        /**
         * The document's identifier within its collection.
         */
        get: function() {
            return this.la.path.j();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "path", {
        /**
         * A string representing the path of the referenced document (relative
         * to the root of the database).
         */
        get: function() {
            return this.la.path.Y();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "parent", {
        /**
         * The collection this `DocumentReference` belongs to.
         */
        get: function() {
            return new fu(this.firestore, this.fa, this.la.path.q());
        },
        enumerable: !1,
        configurable: !0
    }), 
    /**
     * Applies a custom data converter to this `DocumentReference`, allowing you
     * to use your own custom model objects with Firestore. When you call {@link
     * setDoc}, {@link getDoc}, etc. with the returned `DocumentReference`
     * instance, the provided converter will convert between Firestore data and
     * your custom type `U`.
     *
     * @param converter - Converts objects to and from Firestore.
     * @returns A `DocumentReference<U>` that uses the provided converter.
     */
    t.prototype.withConverter = function(e) {
        return new t(this.firestore, e, this.la);
    }, t;
}(), $o = /** @class */ function() {
    // This is the lite version of the Query class in the main SDK.
    /** @hideconstructor protected */
    function t(t, e, n) {
        this.fa = e, this.Ra = n, 
        /** The type of this Firestore reference. */
        this.type = "query", this.firestore = t
        /**
     * Applies a custom data converter to this query, allowing you to use your own
     * custom model objects with Firestore. When you call {@link getDocs} with
     * the returned query, the provided converter will convert between Firestore
     * data and your custom type `U`.
     *
     * @param converter - Converts objects to and from Firestore.
     * @returns A `Query<U>` that uses the provided converter.
     */;
    }
    return t.prototype.withConverter = function(e) {
        return new t(this.firestore, e, this.Ra);
    }, t;
}(), Zo = function() {};

/**
 * A `Query` refers to a Query which you can read or listen to. You can also
 * construct refined `Query` objects by adding filters and ordering.
 */
/**
 * Creates a new immutable instance of `query` that is extended to also include
 * additional query constraints.
 *
 * @param query - The query instance to use as a base for the new constraints.
 * @param queryConstraints - The list of `QueryConstraint`s to apply.
 * @throws if any of the provided query constraints cannot be combined with the
 * existing or new constraints.
 */
function tu(t) {
    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
    for (var r = 0, i = e; r < i.length; r++) {
        var o = i[r];
        t = o.Va(t);
    }
    return t;
}

var eu = /** @class */ function(e) {
    function n(t, n, r) {
        var i = this;
        return (i = e.call(this) || this).pa = t, i.ga = n, i.va = r, i.type = "where", 
        i;
    }
    return t(n, e), n.prototype.Va = function(t) {
        var e = gu(t.firestore), n = function(t, e, n, r, i, o, u) {
            var s;
            if (i.tt()) {
                if ("array-contains" /* ARRAY_CONTAINS */ === o || "array-contains-any" /* ARRAY_CONTAINS_ANY */ === o) throw new S(R.INVALID_ARGUMENT, "Invalid Query. You can't perform '" + o + "' queries on FieldPath.documentId().");
                if ("in" /* IN */ === o || "not-in" /* NOT_IN */ === o) {
                    au(u, o);
                    for (var a = [], c = 0, h = u; c < h.length; c++) {
                        var f = h[c];
                        a.push(su(r, t, f));
                    }
                    s = {
                        arrayValue: {
                            values: a
                        }
                    };
                } else s = su(r, t, u);
            } else "in" /* IN */ !== o && "not-in" /* NOT_IN */ !== o && "array-contains-any" /* ARRAY_CONTAINS_ANY */ !== o || au(u, o), 
            s = Du(n, "where", u, 
            /* allowArrays= */ "in" /* IN */ === o || "not-in" /* NOT_IN */ === o);
            var l = Fn.create(i, o, s);
            return function(t, e) {
                if (e.Ie()) {
                    var n = On(t);
                    if (null !== n && !n.isEqual(e.field)) throw new S(R.INVALID_ARGUMENT, "Invalid query. All where filters with an inequality (<, <=, >, or >=) must be on the same field. But you have inequality filters on '" + n.toString() + "' and '" + e.field.toString() + "'");
                    var r = _n(t);
                    null !== r && cu(t, e.field, r);
                }
                var i = function(t, e) {
                    for (var n = 0, r = t.filters; n < r.length; n++) {
                        var i = r[n];
                        if (e.indexOf(i.op) >= 0) return i.op;
                    }
                    return null;
                }(t, 
                /**
 * Given an operator, returns the set of operators that cannot be used with it.
 *
 * Operators in a query must adhere to the following set of rules:
 * 1. Only one array operator is allowed.
 * 2. Only one disjunctive operator is allowed.
 * 3. NOT_EQUAL cannot be used with another NOT_EQUAL operator.
 * 4. NOT_IN cannot be used with array, disjunctive, or NOT_EQUAL operators.
 *
 * Array operators: ARRAY_CONTAINS, ARRAY_CONTAINS_ANY
 * Disjunctive operators: IN, ARRAY_CONTAINS_ANY, NOT_IN
 */
                function(t) {
                    switch (t) {
                      case "!=" /* NOT_EQUAL */ :
                        return [ "!=" /* NOT_EQUAL */ , "not-in" /* NOT_IN */ ];

                      case "array-contains" /* ARRAY_CONTAINS */ :
                        return [ "array-contains" /* ARRAY_CONTAINS */ , "array-contains-any" /* ARRAY_CONTAINS_ANY */ , "not-in" /* NOT_IN */ ];

                      case "in" /* IN */ :
                        return [ "array-contains-any" /* ARRAY_CONTAINS_ANY */ , "in" /* IN */ , "not-in" /* NOT_IN */ ];

                      case "array-contains-any" /* ARRAY_CONTAINS_ANY */ :
                        return [ "array-contains" /* ARRAY_CONTAINS */ , "array-contains-any" /* ARRAY_CONTAINS_ANY */ , "in" /* IN */ , "not-in" /* NOT_IN */ ];

                      case "not-in" /* NOT_IN */ :
                        return [ "array-contains" /* ARRAY_CONTAINS */ , "array-contains-any" /* ARRAY_CONTAINS_ANY */ , "in" /* IN */ , "not-in" /* NOT_IN */ , "!=" /* NOT_EQUAL */ ];

                      default:
                        return [];
                    }
                }(e.op));
                if (null !== i) 
                // Special case when it's a duplicate op to give a slightly clearer error message.
                throw i === e.op ? new S(R.INVALID_ARGUMENT, "Invalid query. You cannot use more than one '" + e.op.toString() + "' filter.") : new S(R.INVALID_ARGUMENT, "Invalid query. You cannot use '" + e.op.toString() + "' filters with '" + i.toString() + "' filters.");
            }(t, l), l;
        }(t.Ra, 0, e, t.firestore.Qh, this.pa, this.ga, this.va);
        return new $o(t.firestore, t.fa, function(t, e) {
            var n = t.filters.concat([ e ]);
            return new Cn(t.path, t.collectionGroup, t.me.slice(), n, t.limit, t.limitType, t.startAt, t.endAt);
        }(t.Ra, n));
    }, n;
}(Zo), nu = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this) || this).pa = t, r.ba = n, r.type = "orderBy", r;
    }
    return t(n, e), n.prototype.Va = function(t) {
        var e = function(t, e, n) {
            if (null !== t.startAt) throw new S(R.INVALID_ARGUMENT, "Invalid query. You must not call startAt() or startAfter() before calling orderBy().");
            if (null !== t.endAt) throw new S(R.INVALID_ARGUMENT, "Invalid query. You must not call endAt() or endBefore() before calling orderBy().");
            var r = new tr(e, n);
            return function(t, e) {
                if (null === _n(t)) {
                    // This is the first order by. It must match any inequality.
                    var n = On(t);
                    null !== n && cu(t, n, e.field);
                }
            }(t, r), r;
        }(t.Ra, this.pa, this.ba);
        return new $o(t.firestore, t.fa, function(t, e) {
            // TODO(dimond): validate that orderBy does not list the same key twice.
            var n = t.me.concat([ e ]);
            return new Cn(t.path, t.collectionGroup, n, t.filters.slice(), t.limit, t.limitType, t.startAt, t.endAt);
        }(t.Ra, e));
    }, n;
}(Zo), ru = /** @class */ function(e) {
    function n(t, n, r) {
        var i = this;
        return (i = e.call(this) || this).type = t, i.Ca = n, i.Sa = r, i;
    }
    return t(n, e), n.prototype.Va = function(t) {
        return new $o(t.firestore, t.fa, Sn(t.Ra, this.Ca, this.Sa));
    }, n;
}(Zo), iu = /** @class */ function(e) {
    function n(t, n, r) {
        var i = this;
        return (i = e.call(this) || this).type = t, i.Da = n, i.Na = r, i;
    }
    return t(n, e), n.prototype.Va = function(t) {
        var e = uu(t, this.type, this.Da, this.Na);
        return new $o(t.firestore, t.fa, function(t, e) {
            return new Cn(t.path, t.collectionGroup, t.me.slice(), t.filters.slice(), t.limit, t.limitType, e, t.endAt);
        }(t.Ra, e));
    }, n;
}(Zo), ou = /** @class */ function(e) {
    function n(t, n, r) {
        var i = this;
        return (i = e.call(this) || this).type = t, i.Da = n, i.Na = r, i;
    }
    return t(n, e), n.prototype.Va = function(t) {
        var e = uu(t, this.type, this.Da, this.Na);
        return new $o(t.firestore, t.fa, function(t, e) {
            return new Cn(t.path, t.collectionGroup, t.me.slice(), t.filters.slice(), t.limit, t.limitType, t.startAt, e);
        }(t.Ra, e));
    }, n;
}(Zo);

/**
 * Creates a `QueryConstraint` that enforces that documents must contain the
 * specified field and that the value should satisfy the relation constraint
 * provided.
 *
 * @param fieldPath - The path to compare
 * @param opStr - The operation string (e.g "&lt;", "&lt;=", "==", "&lt;",
 *   "&lt;=", "!=").
 * @param value - The value for comparison
 * @returns The created `Query`.
 */
/** Helper function to create a bound from a document or fields */
function uu(t, e, n, r) {
    if (n[0] instanceof Do && (n[0] = n[0].Ch), n[0] instanceof Uo) return function(t, e, n, r, i) {
        if (!r) throw new S(R.NOT_FOUND, "Can't use a DocumentSnapshot that doesn't exist for " + n + "().");
        // Because people expect to continue/end a query at the exact document
        // provided, we need to use the implicit sort order rather than the explicit
        // sort order, because it's guaranteed to contain the document key. That way
        // the position becomes unambiguous and the query continues/ends exactly at
        // the provided document. Without the key (by using the explicit sort
        // orders), multiple documents could match the position, yielding duplicate
        // results.
        for (var o = [], u = 0, s = Ln(t); u < s.length; u++) {
            var a = s[u];
            if (a.field.tt()) o.push(ne(e, r.key)); else {
                var c = r.field(a.field);
                if (zt(c)) throw new S(R.INVALID_ARGUMENT, 'Invalid query. You are trying to start or end a query using a document for which the field "' + a.field + '" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');
                if (null === c) {
                    var h = a.field.Y();
                    throw new S(R.INVALID_ARGUMENT, "Invalid query. You are trying to start or end a query using a document for which the field '" + h + "' (used as the orderBy) does not exist.");
                }
                o.push(c);
            }
        }
        return new Kn(o, i);
    }(t.Ra, t.firestore.Qh, e, n[0]._a, r);
    var i = gu(t.firestore);
    return function(t, e, n, r, i, o) {
        // Use explicit order by's because it has to match the query the user made
        var u = t.me;
        if (i.length > u.length) throw new S(R.INVALID_ARGUMENT, "Too many arguments provided to " + r + "(). The number of arguments must be less than or equal to the number of orderBy() clauses");
        for (var s = [], a = 0; a < i.length; a++) {
            var c = i[a];
            if (u[a].field.tt()) {
                if ("string" != typeof c) throw new S(R.INVALID_ARGUMENT, "Invalid query. Expected a string for document ID in " + r + "(), but got a " + typeof c);
                if (!Pn(t) && -1 !== c.indexOf("/")) throw new S(R.INVALID_ARGUMENT, "Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to " + r + "() must be a plain document ID, but '" + c + "' contains a slash.");
                var h = t.path.child(Q.J(c));
                if (!J.ot(h)) throw new S(R.INVALID_ARGUMENT, "Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to " + r + "() must result in a valid document path, but '" + h + "' is not because it contains an odd number of segments.");
                var f = new J(h);
                s.push(ne(e, f));
            } else {
                var l = Du(n, r, c);
                s.push(l);
            }
        }
        return new Kn(s, o);
    }(t.Ra, t.firestore.Qh, i, e, n, r);
}

function su(t, e, n) {
    if (n instanceof Do && (n = n.Ch), "string" == typeof n) {
        if ("" === n) throw new S(R.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");
        if (!Pn(e) && -1 !== n.indexOf("/")) throw new S(R.INVALID_ARGUMENT, "Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '" + n + "' contains a '/' character.");
        var r = e.path.child(Q.J(n));
        if (!J.ot(r)) throw new S(R.INVALID_ARGUMENT, "Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '" + r + "' is not because it has an odd number of segments (" + r.length + ").");
        return ne(t, new J(r));
    }
    if (n instanceof Jo) return ne(t, n.la);
    throw new S(R.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: " + vo(n) + ".");
}

/**
 * Validates that the value passed into a disjunctive filter satisfies all
 * array requirements.
 */ function au(t, e) {
    if (!Array.isArray(t) || 0 === t.length) throw new S(R.INVALID_ARGUMENT, "Invalid Query. A non-empty array is required for '" + e.toString() + "' filters.");
    if (t.length > 10) throw new S(R.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters support a maximum of 10 elements in the value array.");
}

function cu(t, e, n) {
    if (!n.isEqual(e)) throw new S(R.INVALID_ARGUMENT, "Invalid query. You have a where filter with an inequality (<, <=, >, or >=) on field '" + e.toString() + "' and so you must also use '" + e.toString() + "' as your first argument to orderBy(), but your first orderBy() is on field '" + n.toString() + "' instead.");
}

function hu(t) {
    if (Vn(t) && 0 === t.me.length) throw new S(R.UNIMPLEMENTED, "limitToLast() queries require specifying at least one orderBy() clause");
}

/**
 * A `CollectionReference` object can be used for adding documents, getting
 * document references, and querying for documents (using {@link query}).
 */ var fu = /** @class */ function(e) {
    /** @hideconstructor */
    function n(t, n, r) {
        var i = this;
        return (i = e.call(this, t, n, Dn(r)) || this).firestore = t, i.ya = r, i.type = "collection", 
        i;
    }
    return t(n, e), Object.defineProperty(n.prototype, "id", {
        /** The collection's identifier. */ get: function() {
            return this.Ra.path.j();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(n.prototype, "path", {
        /**
         * A string representing the path of the referenced collection (relative
         * to the root of the database).
         */
        get: function() {
            return this.Ra.path.Y();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(n.prototype, "parent", {
        /**
         * A reference to the containing `DocumentReference` if this is a
         * subcollection. If this isn't a subcollection, the reference is null.
         */
        get: function() {
            var t = this.ya.q();
            return t.W() ? null : new Jo(this.firestore, 
            /* converter= */ null, new J(t));
        },
        enumerable: !1,
        configurable: !0
    }), 
    /**
     * Applies a custom data converter to this CollectionReference, allowing you
     * to use your own custom model objects with Firestore. When you call {@link
     * addDoc} with the returned `CollectionReference` instance, the provided
     * converter will convert between Firestore data and your custom type `U`.
     *
     * @param converter - Converts objects to and from Firestore.
     * @returns A `CollectionReference<U>` that uses the provided converter.
     */
    n.prototype.withConverter = function(t) {
        return new n(this.firestore, t, this.ya);
    }, n;
}($o);

function lu(t, e) {
    for (var n = [], i = 2; i < arguments.length; i++) n[i - 2] = arguments[i];
    if (t instanceof Do && (t = t.Ch), co("collection", "path", e), t instanceof _o) {
        var o = Q.J.apply(Q, r([ e ], n));
        return po(o), new fu(t, /* converter= */ null, o);
    }
    if (!(t instanceof Jo || t instanceof fu)) throw new S(R.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
    var u = Q.J.apply(Q, r([ t.path ], n)).child(Q.J(e));
    return po(u), new fu(t.firestore, 
    /* converter= */ null, u);
}

// TODO(firestorelite): Consider using ErrorFactory -
// https://github.com/firebase/firebase-js-sdk/blob/0131e1f/packages/util/src/errors.ts#L106
/**
 * Creates and returns a new `Query` instance that includes all documents in the
 * database that are contained in a collection or subcollection with the
 * given `collectionId`.
 *
 * @param firestore - A reference to the root Firestore instance.
 * @param collectionId - Identifies the collections to query over. Every
 * collection or subcollection with this ID as the last segment of its path
 * will be included. Cannot contain a slash.
 * @returns The created `Query`.
 */ function pu(t, e) {
    for (var n = [], i = 2; i < arguments.length; i++) n[i - 2] = arguments[i];
    if (t instanceof Do && (t = t.Ch), 
    // We allow omission of 'pathString' but explicitly prohibit passing in both
    // 'undefined' and 'null'.
    1 === arguments.length && (e = z.S()), co("doc", "path", e), t instanceof _o) {
        var o = Q.J.apply(Q, r([ e ], n));
        return lo(o), new Jo(t, 
        /* converter= */ null, new J(o));
    }
    if (!(t instanceof Jo || t instanceof fu)) throw new S(R.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
    var u = t.ya.child(Q.J.apply(Q, r([ e ], n)));
    return lo(u), new Jo(t.firestore, t instanceof fu ? t.fa : null, new J(u));
}

var du = /** @class */ function(e) {
    function n(t) {
        var n = this;
        return (n = e.call(this) || this).firestore = t, n;
    }
    return t(n, e), n.prototype.ea = function(t) {
        return new Co(t);
    }, n.prototype.sa = function(t) {
        var e = this.ua(t, this.firestore.Qh);
        return new Jo(this.firestore, /* converter= */ null, e);
    }, n;
}(Ro);

/**
 * Returns true if the provided references are equal.
 *
 * @param left - A reference to compare.
 * @param right - A reference to compare.
 * @returns true if the references point to the same location in the same
 * Firestore database.
 */ function vu(t, e) {
    return t instanceof Do && (t = t.Ch), e instanceof Do && (e = e.Ch), (t instanceof Jo || t instanceof fu) && (e instanceof Jo || e instanceof fu) && t.firestore === e.firestore && t.path === e.path && t.fa === e.fa
    /**
 * Returns true if the provided queries point to the same collection and apply
 * the same constraints.
 *
 * @param left - A `Query` to compare.
 * @param right - A `Query` to compare.
 * @returns true if the references point to the same location in the same
 * Firestore database.
 */;
}

function yu(t, e) {
    return t instanceof Do && (t = t.Ch), e instanceof Do && (e = e.Ch), t instanceof $o && e instanceof $o && t.firestore === e.firestore && Un(t.Ra, e.Ra) && t.fa === e.fa;
}

function gu(t) {
    var e = t.Jh(), n = ar(t.Qh);
    return new Nu(t.Qh, !!e.ignoreUndefinedProperties, n);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var mu = /^__.*__$/, wu = /** @class */ function() {
    function t(t, e, n) {
        this.data = t, this.ee = e, this.fieldTransforms = n;
    }
    return t.prototype.Pa = function(t, e) {
        var n = [];
        return null !== this.ee ? n.push(new ln(t, this.data, this.ee, e)) : n.push(new fn(t, this.data, e)), 
        this.fieldTransforms.length > 0 && n.push(new dn(t, this.fieldTransforms)), n;
    }, t;
}(), bu = /** @class */ function() {
    function t(t, e, n) {
        this.data = t, this.ee = e, this.fieldTransforms = n;
    }
    return t.prototype.Pa = function(t, e) {
        var n = [ new ln(t, this.data, this.ee, e) ];
        return this.fieldTransforms.length > 0 && n.push(new dn(t, this.fieldTransforms)), 
        n;
    }, t;
}();

/** The result of parsing document data (e.g. for a setData call). */ function Eu(t) {
    switch (t) {
      case 0 /* Set */ :
 // fall through
              case 2 /* MergeSet */ :
 // fall through
              case 1 /* Update */ :
        return !0;

      case 3 /* Argument */ :
      case 4 /* ArrayArgument */ :
        return !1;

      default:
        throw O();
    }
}

/** A "context" object passed around while parsing user data. */ var Tu = /** @class */ function() {
    /**
     * Initializes a ParseContext with the given source and path.
     *
     * @param settings - The settings for the parser.
     * @param databaseId - The database ID of the Firestore instance.
     * @param serializer - The serializer to use to generate the Value proto.
     * @param ignoreUndefinedProperties - Whether to ignore undefined properties
     * rather than throw.
     * @param fieldTransforms - A mutable list of field transforms encountered
     * while parsing the data.
     * @param fieldMask - A mutable list of field paths encountered while parsing
     * the data.
     *
     * TODO(b/34871131): We don't support array paths right now, so path can be
     * null to indicate the context represents any location within an array (in
     * which case certain features will not work and errors will be somewhat
     * compromised).
     */
    function t(t, e, n, r, i, o) {
        this.settings = t, this.t = e, this.serializer = n, this.ignoreUndefinedProperties = r, 
        // Minor hack: If fieldTransforms is undefined, we assume this is an
        // external call and we need to validate the entire path.
        void 0 === i && this.xa(), this.fieldTransforms = i || [], this.ee = o || [];
    }
    return Object.defineProperty(t.prototype, "path", {
        get: function() {
            return this.settings.path;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "Dh", {
        get: function() {
            return this.settings.Dh;
        },
        enumerable: !1,
        configurable: !0
    }), 
    /** Returns a new context with the specified settings overwritten. */ t.prototype.Fa = function(e) {
        return new t(Object.assign(Object.assign({}, this.settings), e), this.t, this.serializer, this.ignoreUndefinedProperties, this.fieldTransforms, this.ee);
    }, t.prototype.Oa = function(t) {
        var e, n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t), r = this.Fa({
            path: n,
            Fh: !1
        });
        return r.La(t), r;
    }, t.prototype.$a = function(t) {
        var e, n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t), r = this.Fa({
            path: n,
            Fh: !1
        });
        return r.xa(), r;
    }, t.prototype.ka = function(t) {
        // TODO(b/34871131): We don't support array paths right now; so make path
        // undefined.
        return this.Fa({
            path: void 0,
            Fh: !0
        });
    }, t.prototype.Nh = function(t) {
        return Su(t, this.settings.methodName, this.settings.Ma || !1, this.path, this.settings.xh);
    }, 
    /** Returns 'true' if 'fieldPath' was traversed when creating this context. */ t.prototype.contains = function(t) {
        return void 0 !== this.ee.find((function(e) {
            return t.G(e);
        })) || void 0 !== this.fieldTransforms.find((function(e) {
            return t.G(e.field);
        }));
    }, t.prototype.xa = function() {
        // TODO(b/34871131): Remove null check once we have proper paths for fields
        // within arrays.
        if (this.path) for (var t = 0; t < this.path.length; t++) this.La(this.path.get(t));
    }, t.prototype.La = function(t) {
        if (0 === t.length) throw this.Nh("Document fields must not be empty");
        if (Eu(this.Dh) && mu.test(t)) throw this.Nh('Document fields cannot begin and end with "__"');
    }, t;
}(), Nu = /** @class */ function() {
    function t(t, e, n) {
        this.t = t, this.ignoreUndefinedProperties = e, this.serializer = n || ar(t)
        /** Creates a new top-level parse context. */;
    }
    return t.prototype.Ua = function(t, e, n, r) {
        return void 0 === r && (r = !1), new Tu({
            Dh: t,
            methodName: e,
            xh: n,
            path: K.X(),
            Fh: !1,
            Ma: r
        }, this.t, this.serializer, this.ignoreUndefinedProperties);
    }, t;
}();

/**
 * Helper for parsing raw user input (provided via the API) into internal model
 * classes.
 */
/** Parse document data from a set() call. */ function Iu(t, e, n, r, i, o) {
    void 0 === o && (o = {});
    var u = t.Ua(o.merge || o.mergeFields ? 2 /* MergeSet */ : 0 /* Set */ , e, n, i);
    Ou("Data must be an object, but it was:", u, r);
    var s, a, c = Vu(r, u);
    if (o.merge) s = new Ze(u.ee), a = u.fieldTransforms; else if (o.mergeFields) {
        for (var h = [], f = 0, l = o.mergeFields; f < l.length; f++) {
            var p = Pu(e, l[f], n);
            if (!u.contains(p)) throw new S(R.INVALID_ARGUMENT, "Field '" + p + "' is specified in your field mask but missing from your input data.");
            Uu(h, p) || h.push(p);
        }
        s = new Ze(h), a = u.fieldTransforms.filter((function(t) {
            return s.ue(t.field);
        }));
    } else s = null, a = u.fieldTransforms;
    return new wu(new wn(c), s, a);
}

/** Parse update data from an update() call. */ function Au(t, e, n, r) {
    var i = t.Ua(1 /* Update */ , e, n);
    Ou("Data must be an object, but it was:", i, r);
    var o = [], u = new bn;
    xt(r, (function(t, r) {
        var s = Ru(e, t, n);
        // For Compat types, we have to "extract" the underlying types before
        // performing validation.
                r instanceof Do && (r = r.Ch);
        var a = i.$a(s);
        if (r instanceof wo) 
        // Add it to the field mask, but don't add anything to updateData.
        o.push(s); else {
            var c = ku(r, a);
            null != c && (o.push(s), u.set(s, c));
        }
    }));
    var s = new Ze(o);
    return new bu(u.ae(), s, i.fieldTransforms);
}

/** Parse update data from a list of field/value arguments. */ function Cu(t, e, n, r, i, o) {
    var u = t.Ua(1 /* Update */ , e, n), s = [ Pu(e, r, n) ], a = [ i ];
    if (o.length % 2 != 0) throw new S(R.INVALID_ARGUMENT, "Function " + e + "() needs to be called with an even number of arguments that alternate between field names and values.");
    for (var c = 0; c < o.length; c += 2) s.push(Pu(e, o[c])), a.push(o[c + 1]);
    // We iterate in reverse order to pick the last value for a field if the
    // user specified the field multiple times.
    for (var h = [], f = new bn, l = s.length - 1; l >= 0; --l) if (!Uu(h, s[l])) {
        var p = s[l], d = a[l];
        // For Compat types, we have to "extract" the underlying types before
        // performing validation.
        d instanceof Do && (d = d.Ch);
        var v = u.$a(p);
        if (d instanceof wo) 
        // Add it to the field mask, but don't add anything to updateData.
        h.push(p); else {
            var y = ku(d, v);
            null != y && (h.push(p), f.set(p, y));
        }
    }
    var g = new Ze(h);
    return new bu(f.ae(), g, u.fieldTransforms);
}

/**
 * Parse a "query value" (e.g. value in a where filter or a value in a cursor
 * bound).
 *
 * @param allowArrays - Whether the query value is an array that may directly
 * contain additional arrays (e.g. the operand of an `in` query).
 */ function Du(t, e, n, r) {
    return void 0 === r && (r = !1), ku(n, t.Ua(r ? 4 /* ArrayArgument */ : 3 /* Argument */ , e));
}

/**
 * Parses user data to Protobuf Values.
 *
 * @param input - Data to be parsed.
 * @param context - A context object representing the current path being parsed,
 * the source of the data being parsed, etc.
 * @returns The parsed value, or null if the value was a FieldValue sentinel
 * that should not be included in the resulting parsed data.
 */ function ku(t, e) {
    if (
    // Unwrap the API type from the Compat SDK. This will return the API type
    // from firestore-exp.
    t instanceof Do && (t = t.Ch), _u(t)) return Ou("Unsupported field value:", e, t), 
    Vu(t, e);
    if (t instanceof mo) 
    // FieldValues usually parse into transforms (except FieldValue.delete())
    // in which case we do not want to include this field in our parsed data
    // (as doing so will overwrite the field directly prior to the transform
    // trying to transform it). So we don't add this location to
    // context.fieldMask and we return null as our parsing result.
    /**
     * "Parses" the provided FieldValueImpl, adding any necessary transforms to
     * context.fieldTransforms.
     */
    return function(t, e) {
        // Sentinels are only supported with writes, and not within arrays.
        if (!Eu(e.Dh)) throw e.Nh(t._methodName + "() can only be used with update() and set()");
        if (!e.path) throw e.Nh(t._methodName + "() is not currently supported inside arrays");
        var n = t.Sh(e);
        n && e.fieldTransforms.push(n);
    }(t, e), null;
    if (
    // If context.path is null we are inside an array and we don't support
    // field mask paths more granular than the top-level array.
    e.path && e.ee.push(e.path), t instanceof Array) {
        // TODO(b/34871131): Include the path containing the array in the error
        // message.
        // In the case of IN queries, the parsed data is an array (representing
        // the set of values to be included for the IN query) that may directly
        // contain additional arrays (each representing an individual field
        // value), so we disable this validation.
        if (e.settings.Fh && 4 /* ArrayArgument */ !== e.Dh) throw e.Nh("Nested arrays are not supported");
        return function(t, e) {
            for (var n = [], r = 0, i = 0, o = t; i < o.length; i++) {
                var u = ku(o[i], e.ka(r));
                null == u && (
                // Just include nulls in the array for fields being replaced with a
                // sentinel.
                u = {
                    nullValue: "NULL_VALUE"
                }), n.push(u), r++;
            }
            return {
                arrayValue: {
                    values: n
                }
            };
        }(t, e);
    }
    return function(t, e) {
        if (t instanceof Do && (t = t.Ch), null === t) return {
            nullValue: "NULL_VALUE"
        };
        if ("number" == typeof t) return pe(e.serializer, t);
        if ("boolean" == typeof t) return {
            booleanValue: t
        };
        if ("string" == typeof t) return {
            stringValue: t
        };
        if (t instanceof Date) {
            var n = W.fromDate(t);
            return {
                timestampValue: de(e.serializer, n)
            };
        }
        if (t instanceof W) {
            // Firestore backend truncates precision down to microseconds. To ensure
            // offline mode works the same with regards to truncation, perform the
            // truncation immediately without waiting for the backend to do that.
            var r = new W(t.seconds, 1e3 * Math.floor(t.nanoseconds / 1e3));
            return {
                timestampValue: de(e.serializer, r)
            };
        }
        if (t instanceof Ao) return {
            geoPointValue: {
                latitude: t.latitude,
                longitude: t.longitude
            }
        };
        if (t instanceof Co) return {
            bytesValue: ve(e.serializer, t.Mh)
        };
        if (t instanceof Jo) {
            var i = e.t, o = t.firestore.Qh;
            if (!o.isEqual(i)) throw e.Nh("Document reference is for database " + o.projectId + "/" + o.database + " but should be for database " + i.projectId + "/" + i.database);
            return {
                referenceValue: me(t.firestore.Qh || e.t, t.la.path)
            };
        }
        if (void 0 === t && e.ignoreUndefinedProperties) return null;
        throw e.Nh("Unsupported field value: " + vo(t));
    }(t, e);
}

function Vu(t, e) {
    var n = {};
    return Ft(t) ? 
    // If we encounter an empty object, we explicitly add it to the update
    // mask to ensure that the server creates a map entry.
    e.path && e.path.length > 0 && e.ee.push(e.path) : xt(t, (function(t, r) {
        var i = ku(r, e.Oa(t));
        null != i && (n[t] = i);
    })), {
        mapValue: {
            fields: n
        }
    };
}

function _u(t) {
    return !("object" != typeof t || null === t || t instanceof Array || t instanceof Date || t instanceof W || t instanceof Ao || t instanceof Co || t instanceof Jo || t instanceof mo);
}

function Ou(t, e, n) {
    if (!_u(n) || !function(t) {
        return "object" == typeof t && null !== t && (Object.getPrototypeOf(t) === Object.prototype || null === Object.getPrototypeOf(t));
    }(n)) {
        var r = vo(n);
        throw "an object" === r ? e.Nh(t + " a custom object") : e.Nh(t + " " + r);
    }
}

/**
 * Helper that calls fromDotSeparatedString() but wraps any error thrown.
 */ function Pu(t, e, n) {
    if (
    // If required, replace the FieldPath Compat class with with the firestore-exp
    // FieldPath.
    e instanceof Do && (e = e.Ch), e instanceof Mo) return e.da;
    if ("string" == typeof e) return Ru(t, e);
    throw Su("Field path arguments must be of type string or FieldPath.", t, 
    /* hasConverter= */ !1, 
    /* path= */ void 0, n);
}

/**
 * Matches any characters in a field path string that are reserved.
 */ var Lu = new RegExp("[~\\*/\\[\\]]");

/**
 * Wraps fromDotSeparatedString with an error message about the method that
 * was thrown.
 * @param methodName - The publicly visible method name
 * @param path - The dot-separated string form of a field path which will be
 * split on dots.
 * @param targetDoc - The document against which the field path will be
 * evaluated.
 */ function Ru(t, e, n) {
    if (e.search(Lu) >= 0) throw Su("Invalid field path (" + e + "). Paths must not contain '~', '*', '/', '[', or ']'", t, 
    /* hasConverter= */ !1, 
    /* path= */ void 0, n);
    try {
        return (new (Mo.bind.apply(Mo, r([ void 0 ], e.split("."))))).da;
    } catch (r) {
        throw Su("Invalid field path (" + e + "). Paths must not be empty, begin with '.', end with '.', or contain '..'", t, 
        /* hasConverter= */ !1, 
        /* path= */ void 0, n);
    }
}

function Su(t, e, n, r, i) {
    var o = r && !r.W(), u = void 0 !== i, s = "Function " + e + "() called with invalid data";
    n && (s += " (via `toFirestore()`)");
    var a = "";
    return (o || u) && (a += " (found", o && (a += " in field " + r), u && (a += " in document " + i), 
    a += ")"), new S(R.INVALID_ARGUMENT, (s += ". ") + t + a)
    /** Checks `haystack` if FieldPath `needle` is present. Runs in O(n). */;
}

function Uu(t, e) {
    return t.some((function(t) {
        return t.isEqual(e);
    }));
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Internal transaction object responsible for accumulating the mutations to
 * perform and the base versions for any documents read.
 */ var qu = /** @class */ function() {
    function t(t) {
        this.Hr = t, 
        // The version of each document that was read during this transaction.
        this.qa = new Map, this.mutations = [], this.Ba = !1, 
        /**
             * A deferred usage error that occurred previously in this transaction that
             * will cause the transaction to fail once it actually commits.
             */
        this.Qa = null, 
        /**
             * Set of documents that have been written in the transaction.
             *
             * When there's more than one write to the same key in a transaction, any
             * writes after the first are handled differently.
             */
        this.ja = new Set;
    }
    return t.prototype.Wa = function(t) {
        return e(this, void 0, void 0, (function() {
            var r, i = this;
            return n(this, (function(o) {
                switch (o.label) {
                  case 0:
                    if (this.Ga(), this.mutations.length > 0) throw new S(R.INVALID_ARGUMENT, "Firestore transactions require all reads to be executed before all writes.");
                    return [ 4 /*yield*/ , function(t, r) {
                        return e(this, void 0, void 0, (function() {
                            var e, i, o, u, s, a;
                            return n(this, (function(n) {
                                switch (n.label) {
                                  case 0:
                                    return e = L(t), i = Ne(e.serializer) + "/documents", o = {
                                        documents: r.map((function(t) {
                                            return be(e.serializer, t);
                                        }))
                                    }, [ 4 /*yield*/ , e.kr("BatchGetDocuments", i, o) ];

                                  case 1:
                                    return u = n.sent(), s = new Map, u.forEach((function(t) {
                                        var n = function(t, e) {
                                            return "found" in e ? function(t, e) {
                                                P(!!e.found), e.found.name, e.found.updateTime;
                                                var n = Ee(t, e.found.name), r = ge(e.found.updateTime), i = new wn({
                                                    mapValue: {
                                                        fields: e.found.fields
                                                    }
                                                });
                                                return new Nn(n, r, i, {});
                                            }(t, e) : "missing" in e ? function(t, e) {
                                                P(!!e.missing), P(!!e.readTime);
                                                var n = Ee(t, e.missing), r = ge(e.readTime);
                                                return new In(n, r);
                                            }(t, e) : O();
                                        }(e.serializer, t);
                                        s.set(n.key.toString(), n);
                                    })), a = [], [ 2 /*return*/ , (r.forEach((function(t) {
                                        var e = s.get(t.toString());
                                        P(!!e), a.push(e);
                                    })), a) ];
                                }
                            }));
                        }));
                    }(this.Hr, t) ];

                  case 1:
                    return [ 2 /*return*/ , ((r = o.sent()).forEach((function(t) {
                        t instanceof In || t instanceof Nn ? i.Ka(t) : O();
                    })), r) ];
                }
            }));
        }));
    }, t.prototype.set = function(t, e) {
        this.write(e.Pa(t, this.re(t))), this.ja.add(t.toString());
    }, t.prototype.update = function(t, e) {
        try {
            this.write(e.Pa(t, this.za(t)));
        } catch (t) {
            this.Qa = t;
        }
        this.ja.add(t.toString());
    }, t.prototype.delete = function(t) {
        this.write([ new gn(t, this.re(t)) ]), this.ja.add(t.toString());
    }, t.prototype.commit = function() {
        return e(this, void 0, void 0, (function() {
            var t, r = this;
            return n(this, (function(i) {
                switch (i.label) {
                  case 0:
                    if (this.Ga(), this.Qa) throw this.Qa;
                    return t = this.qa, 
                    // For each mutation, note that the doc was written.
                    this.mutations.forEach((function(e) {
                        t.delete(e.key.toString());
                    })), 
                    // For each document that was read but not written to, we want to perform
                    // a `verify` operation.
                    t.forEach((function(t, e) {
                        var n = J.st(e);
                        r.mutations.push(new mn(n, r.re(n)));
                    })), [ 4 /*yield*/ , function(t, r) {
                        return e(this, void 0, void 0, (function() {
                            var e, i, o;
                            return n(this, (function(n) {
                                switch (n.label) {
                                  case 0:
                                    return e = L(t), i = Ne(e.serializer) + "/documents", o = {
                                        writes: r.map((function(t) {
                                            return Ce(e.serializer, t);
                                        }))
                                    }, [ 4 /*yield*/ , e.$r("Commit", i, o) ];

                                  case 1:
                                    return n.sent(), [ 2 /*return*/ ];
                                }
                            }));
                        }));
                    }(this.Hr, this.mutations) ];

                  case 1:
                    // For each mutation, note that the doc was written.
                    return i.sent(), this.Ba = !0, [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.Ka = function(t) {
        var e;
        if (t instanceof Nn) e = t.version; else {
            if (!(t instanceof In)) throw O();
            // For deleted docs, we must use baseVersion 0 when we overwrite them.
                        e = Y.min();
        }
        var n = this.qa.get(t.key.toString());
        if (n) {
            if (!e.isEqual(n)) 
            // This transaction will fail no matter what.
            throw new S(R.ABORTED, "Document version changed between two reads.");
        } else this.qa.set(t.key.toString(), e);
    }, 
    /**
     * Returns the version of this document when it was read in this transaction,
     * as a precondition, or no precondition if it was not read.
     */
    t.prototype.re = function(t) {
        var e = this.qa.get(t.toString());
        return !this.ja.has(t.toString()) && e ? nn.updateTime(e) : nn.ce();
    }, 
    /**
     * Returns the precondition for a document if the operation is an update.
     */
    t.prototype.za = function(t) {
        var e = this.qa.get(t.toString());
        // The first time a document is written, we want to take into account the
        // read time and existence
                if (!this.ja.has(t.toString()) && e) {
            if (e.isEqual(Y.min())) 
            // The document doesn't exist, so fail the transaction.
            // This has to be validated locally because you can't send a
            // precondition that a document does not exist without changing the
            // semantics of the backend write to be an insert. This is the reverse
            // of what we want, since we want to assert that the document doesn't
            // exist but then send the update and have it fail. Since we can't
            // express that to the backend, we have to validate locally.
            // Note: this can change once we can send separate verify writes in the
            // transaction.
            throw new S(R.INVALID_ARGUMENT, "Can't update a document that doesn't exist.");
            // Document exists, base precondition on document update time.
                        return nn.updateTime(e);
        }
        // Document was not read, so we just use the preconditions for a blind
        // update.
                return nn.exists(!0);
    }, t.prototype.write = function(t) {
        this.Ga(), this.mutations = this.mutations.concat(t);
    }, t.prototype.Ga = function() {}, t;
}(), ju = /** @class */ function() {
    function t(t, e, n, r) {
        this.Ns = t, this.Hr = e, this.updateFunction = n, this.Os = r, this.Ha = 5, this.Ks = new pr(this.Ns, "transaction_retry" /* TransactionRetry */)
        /** Runs the transaction and sets the result on deferred. */;
    }
    return t.prototype.run = function() {
        this.Ya();
    }, t.prototype.Ya = function() {
        var t = this;
        this.Ks.vs((function() {
            return e(t, void 0, void 0, (function() {
                var t, e, r = this;
                return n(this, (function(n) {
                    return t = new qu(this.Hr), (e = this.Ja(t)) && e.then((function(e) {
                        r.Ns.Ms((function() {
                            return t.commit().then((function() {
                                r.Os.resolve(e);
                            })).catch((function(t) {
                                r.Xa(t);
                            }));
                        }));
                    })).catch((function(t) {
                        r.Xa(t);
                    })), [ 2 /*return*/ ];
                }));
            }));
        }));
    }, t.prototype.Ja = function(t) {
        try {
            var e = this.updateFunction(t);
            return !$(e) && e.catch && e.then ? e : (this.Os.reject(Error("Transaction callback must return a Promise")), 
            null);
        } catch (t) {
            // Do not retry errors thrown by user provided updateFunction.
            return this.Os.reject(t), null;
        }
    }, t.prototype.Xa = function(t) {
        var e = this;
        this.Ha > 0 && this.Za(t) ? (this.Ha -= 1, this.Ns.Ms((function() {
            return e.Ya(), Promise.resolve();
        }))) : this.Os.reject(t);
    }, t.prototype.Za = function(t) {
        if ("FirebaseError" === t.name) {
            // In transactions, the backend will fail outdated reads with FAILED_PRECONDITION and
            // non-matching document versions with ABORTED. These errors should be retried.
            var e = t.code;
            return "aborted" === e || "failed-precondition" === e || !ht(e);
        }
        return !1;
    }, t;
}(), Mu = /** @class */ function() {
    function t(t, 
    /**
     * Asynchronous queue responsible for all of our internal processing. When
     * we get incoming work from the user (via public API) or the network
     * (incoming GRPC messages), we should always schedule onto this queue.
     * This ensures all of our work is properly serialized (e.g. we don't
     * start processing a new operation while the previous one is waiting for
     * an async I/O to complete).
     */
    e, n) {
        var r = this;
        this.credentials = t, this.Ns = e, this.th = n, this.user = I.UNAUTHENTICATED, this.clientId = z.S(), 
        this.tl = function() {}, this.V = new sr, this.credentials.I((function(t) {
            D("FirestoreClient", "Received user=", t.uid), r.user.isEqual(t) || (r.user = t, 
            r.tl(t)), r.V.resolve();
        }));
    }
    return t.prototype.getConfiguration = function() {
        return e(this, void 0, void 0, (function() {
            return n(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return [ 4 /*yield*/ , this.V.promise ];

                  case 1:
                    return [ 2 /*return*/ , (t.sent(), {
                        Ns: this.Ns,
                        th: this.th,
                        clientId: this.clientId,
                        credentials: this.credentials,
                        Ah: this.user,
                        pu: 100
                    }) ];
                }
            }));
        }));
    }, t.prototype.nl = function(t) {
        var e = this;
        this.tl = t, 
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.V.promise.then((function() {
            return e.tl(e.user);
        }));
    }, 
    /**
     * Checks that the client has not been terminated. Ensures that other methods on
     * this class cannot be called after the client is terminated.
     */
    t.prototype.el = function() {
        if (this.Ns.Hs) throw new S(R.FAILED_PRECONDITION, "The client has already been terminated.");
    }, t.prototype.terminate = function() {
        var t = this;
        this.Ns.Zs();
        var r = new sr;
        return this.Ns.Ys((function() {
            return e(t, void 0, void 0, (function() {
                var t, e;
                return n(this, (function(n) {
                    switch (n.label) {
                      case 0:
                        return n.trys.push([ 0, 5, , 6 ]), this.sl ? [ 4 /*yield*/ , this.sl.terminate() ] : [ 3 /*break*/ , 2 ];

                      case 1:
                        n.sent(), n.label = 2;

                      case 2:
                        return this.il ? [ 4 /*yield*/ , this.il.terminate() ] : [ 3 /*break*/ , 4 ];

                      case 3:
                        n.sent(), n.label = 4;

                      case 4:
                        // `removeChangeListener` must be called after shutting down the
                        // RemoteStore as it will prevent the RemoteStore from retrieving
                        // auth tokens.
                        return this.credentials.R(), r.resolve(), [ 3 /*break*/ , 6 ];

                      case 5:
                        return t = n.sent(), e = mr(t, "Failed to shutdown persistence"), r.reject(e), [ 3 /*break*/ , 6 ];

                      case 6:
                        return [ 2 /*return*/ ];
                    }
                }));
            }));
        })), r.promise;
    }, t;
}();

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * TransactionRunner encapsulates the logic needed to run and retry transactions
 * with backoff.
 */ function xu(t, r) {
    return e(this, void 0, void 0, (function() {
        var i, o;
        return n(this, (function(u) {
            switch (u.label) {
              case 0:
                return t.Ns.si(), [ 4 /*yield*/ , Fu(t) ];

              case 1:
                return i = u.sent(), D("FirestoreClient", "Initializing OnlineComponentProvider"), 
                [ 4 /*yield*/ , t.getConfiguration() ];

              case 2:
                return o = u.sent(), [ 4 /*yield*/ , r.initialize(i, o) ];

              case 3:
                return u.sent(), 
                // The CredentialChangeListener of the online component provider takes
                // precedence over the offline component provider.
                t.nl((function(i) {
                    return t.Ns.ti((function() {
                        return function(t, r) {
                            return e(this, void 0, void 0, (function() {
                                var e, i;
                                return n(this, (function(n) {
                                    switch (n.label) {
                                      case 0:
                                        return (e = L(t)).Ns.si(), D("RemoteStore", "RemoteStore received new credentials"), 
                                        i = Qr(e), 
                                        // Tear down and re-create our network streams. This will ensure we get a
                                        // fresh auth token for the new user and re-fill the write pipeline with
                                        // new mutations from the LocalStore (since mutations are per-user).
                                        e.Zr.add(3 /* CredentialChange */), [ 4 /*yield*/ , Fr(e) ];

                                      case 1:
                                        return n.sent(), i && 
                                        // Don't set the network status to Unknown if we are offline.
                                        e.io.set("Unknown" /* Unknown */), [ 4 /*yield*/ , e.Yr.ph(r) ];

                                      case 2:
                                        return n.sent(), e.Zr.delete(3 /* CredentialChange */), [ 4 /*yield*/ , xr(e) ];

                                      case 3:
                                        // Tear down and re-create our network streams. This will ensure we get a
                                        // fresh auth token for the new user and re-fill the write pipeline with
                                        // new mutations from the LocalStore (since mutations are per-user).
                                        return n.sent(), [ 2 /*return*/ ];
                                    }
                                }));
                            }));
                        }(r.Pu, i);
                    }));
                })), t.sl = r, [ 2 /*return*/ ];
            }
        }));
    }));
}

function Fu(t) {
    return e(this, void 0, void 0, (function() {
        return n(this, (function(r) {
            switch (r.label) {
              case 0:
                return t.il ? [ 3 /*break*/ , 2 ] : (D("FirestoreClient", "Using default OfflineComponentProvider"), 
                [ 4 /*yield*/ , function(t, r) {
                    return e(this, void 0, void 0, (function() {
                        var i, o = this;
                        return n(this, (function(u) {
                            switch (u.label) {
                              case 0:
                                return t.Ns.si(), D("FirestoreClient", "Initializing OfflineComponentProvider"), 
                                [ 4 /*yield*/ , t.getConfiguration() ];

                              case 1:
                                return i = u.sent(), [ 4 /*yield*/ , r.initialize(i) ];

                              case 2:
                                return u.sent(), t.nl((function(i) {
                                    return t.Ns.ti((function() {
                                        return e(o, void 0, void 0, (function() {
                                            return n(this, (function(t) {
                                                switch (t.label) {
                                                  case 0:
                                                    return [ 4 /*yield*/ , Cr(r.zr, i) ];

                                                  case 1:
                                                    return t.sent(), [ 2 /*return*/ ];
                                                }
                                            }));
                                        }));
                                    }));
                                })), 
                                // When a user calls clearPersistence() in one client, all other clients
                                // need to be terminated to allow the delete to succeed.
                                r.persistence.xc((function() {
                                    return t.terminate();
                                })), t.il = r, [ 2 /*return*/ ];
                            }
                        }));
                    }));
                }(t, new uo) ]);

              case 1:
                r.sent(), r.label = 2;

              case 2:
                return [ 2 /*return*/ , t.il ];
            }
        }));
    }));
}

function zu(t) {
    return e(this, void 0, void 0, (function() {
        return n(this, (function(e) {
            switch (e.label) {
              case 0:
                return t.sl ? [ 3 /*break*/ , 2 ] : (D("FirestoreClient", "Using default OnlineComponentProvider"), 
                [ 4 /*yield*/ , xu(t, new so) ]);

              case 1:
                e.sent(), e.label = 2;

              case 2:
                return [ 2 /*return*/ , t.sl ];
            }
        }));
    }));
}

function Gu(t) {
    return Fu(t).then((function(t) {
        return t.persistence;
    }));
}

function Bu(t) {
    return Fu(t).then((function(t) {
        return t.zr;
    }));
}

function Wu(t) {
    return zu(t).then((function(t) {
        return t.Pu;
    }));
}

function Yu(t) {
    return zu(t).then((function(t) {
        return t.yh;
    }));
}

function Hu(t) {
    return e(this, void 0, void 0, (function() {
        var e, r;
        return n(this, (function(n) {
            switch (n.label) {
              case 0:
                return [ 4 /*yield*/ , zu(t) ];

              case 1:
                return e = n.sent(), [ 2 /*return*/ , ((r = e.yu).wo = ki.bind(null, e.yh), r.To = Vi.bind(null, e.yh), 
                r) ];
            }
        }));
    }));
}

function Qu(t, r, i) {
    var o = this;
    void 0 === i && (i = {});
    var u = new sr;
    return t.Ns.Ms((function() {
        return e(o, void 0, void 0, (function() {
            var e;
            return n(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return e = function(t, e, n, r, i) {
                        var o = new ao({
                            next: function(o) {
                                // Remove query first before passing event to user to avoid
                                // user actions affecting the now stale query.
                                e.Ms((function() {
                                    return pi(t, u);
                                }));
                                var s = o.docs.has(n);
                                !s && o.fromCache ? 
                                // TODO(dimond): If we're online and the document doesn't
                                // exist then we resolve with a doc.exists set to false. If
                                // we're offline however, we reject the Promise in this
                                // case. Two options: 1) Cache the negative response from
                                // the server so we can deliver that even when you're
                                // offline 2) Actually reject the Promise in the online case
                                // if the document doesn't exist.
                                i.reject(new S(R.UNAVAILABLE, "Failed to get document because the client is offline.")) : s && o.fromCache && r && "server" === r.source ? i.reject(new S(R.UNAVAILABLE, 'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')) : i.resolve(o);
                            },
                            error: function(t) {
                                return i.reject(t);
                            }
                        }), u = new gi(Dn(n.path), o, {
                            includeMetadataChanges: !0,
                            po: !0
                        });
                        return li(t, u);
                    }, [ 4 /*yield*/ , Hu(t) ];

                  case 1:
                    return [ 2 /*return*/ , e.apply(void 0, [ n.sent(), t.Ns, r, i, u ]) ];
                }
            }));
        }));
    })), u.promise;
}

function Xu(t, r, i) {
    var o = this;
    void 0 === i && (i = {});
    var u = new sr;
    return t.Ns.Ms((function() {
        return e(o, void 0, void 0, (function() {
            var e;
            return n(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return e = function(t, e, n, r, i) {
                        var o = new ao({
                            next: function(n) {
                                // Remove query first before passing event to user to avoid
                                // user actions affecting the now stale query.
                                e.Ms((function() {
                                    return pi(t, u);
                                })), n.fromCache && "server" === r.source ? i.reject(new S(R.UNAVAILABLE, 'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')) : i.resolve(n);
                            },
                            error: function(t) {
                                return i.reject(t);
                            }
                        }), u = new gi(n, o, {
                            includeMetadataChanges: !0,
                            po: !0
                        });
                        return li(t, u);
                    }, [ 4 /*yield*/ , Hu(t) ];

                  case 1:
                    return [ 2 /*return*/ , e.apply(void 0, [ n.sent(), t.Ns, r, i, u ]) ];
                }
            }));
        }));
    })), u.promise;
}

var Ku = /** @class */ function() {
    /** @hideconstructor */
    function t(t, e) {
        this.ha = t, this.rl = e, this.ol = [], this.ul = !1, this.cl = gu(t);
    }
    return t.prototype.set = function(t, e, n) {
        this.hl();
        var r = Ju(t, this.ha), i = ms(r.fa, e, n), o = Iu(this.cl, "WriteBatch.set", r.la, i, null !== r.fa, n);
        return this.ol = this.ol.concat(o.Pa(r.la, nn.ce())), this;
    }, t.prototype.update = function(t, e, n) {
        for (var r = [], i = 3; i < arguments.length; i++) r[i - 3] = arguments[i];
        this.hl();
        var o, u = Ju(t, this.ha);
        // For Compat types, we have to "extract" the underlying types before
        // performing validation.
                return e instanceof Do && (e = e.Ch), o = "string" == typeof e || e instanceof Mo ? Cu(this.cl, "WriteBatch.update", u.la, e, n, r) : Au(this.cl, "WriteBatch.update", u.la, e), 
        this.ol = this.ol.concat(o.Pa(u.la, nn.exists(!0))), this;
    }, 
    /**
     * Deletes the document referred to by the provided {@link DocumentReference}.
     *
     * @param documentRef - A reference to the document to be deleted.
     * @returns This `WriteBatch` instance. Used for chaining method calls.
     */
    t.prototype.delete = function(t) {
        this.hl();
        var e = Ju(t, this.ha);
        return this.ol = this.ol.concat(new gn(e.la, nn.ce())), this;
    }, 
    /**
     * Commits all of the writes in this write batch as a single atomic unit.
     *
     * The result of these writes will only be reflected in document reads that
     * occur after the returned Promise resolves. If the client is offline, the
     * write fails. If you would like to see local modifications or buffer writes
     * until the client is online, use the full Firestore SDK.
     *
     * @returns A Promise resolved once all of the writes in the batch have been
     * successfully written to the backend as an atomic unit (note that it won't
     * resolve while you're offline).
     */
    t.prototype.commit = function() {
        return this.hl(), this.ul = !0, this.ol.length > 0 ? this.rl(this.ol) : Promise.resolve();
    }, t.prototype.hl = function() {
        if (this.ul) throw new S(R.FAILED_PRECONDITION, "A write batch can no longer be used after commit() has been called.");
    }, t;
}();

function Ju(t, e) {
    if (t instanceof Do && (t = t.Ch), t.firestore !== e) throw new S(R.INVALID_ARGUMENT, "Provided document reference is from a different Firestore instance.");
    return t;
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// TODO(mrschmidt) Consider using `BaseTransaction` as the base class in the
// legacy SDK.
/**
 * A reference to a transaction.
 *
 * The `Transaction` object passed to a transaction's `updateFunction` provides
 * the methods to read and write data within the transaction context. See
 * {@link runTransaction}.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A reference to a transaction.
 *
 * The `Transaction` object passed to a transaction's `updateFunction` provides
 * the methods to read and write data within the transaction context. See
 * {@link runTransaction}.
 */ var $u = /** @class */ function(e) {
    // This class implements the same logic as the Transaction API in the Lite SDK
    // but is subclassed in order to return its own DocumentSnapshot types.
    /** @hideconstructor */
    function n(t, n) {
        var r = this;
        return (r = e.call(this, t, n) || this).ha = t, r;
    }
    /**
     * Reads the document referenced by the provided {@link DocumentReference}.
     *
     * @param documentRef - A reference to the document to be read.
     * @returns A `DocumentSnapshot` with the read data.
     */    return t(n, e), n.prototype.get = function(t) {
        var n = this, r = Ju(t, this.ha), i = new Yo(this.ha);
        return e.prototype.get.call(this, t).then((function(t) {
            return new Fo(n.ha, i, r.la, t._a, new hs(
            /* hasPendingWrites= */ !1, 
            /* fromCache= */ !1), r.fa);
        }));
    }, n;
}(/** @class */ function() {
    /** @hideconstructor */
    function t(t, e) {
        this.ha = t, this.al = e, this.cl = gu(t)
        /**
     * Reads the document referenced by the provided {@link DocumentReference}.
     *
     * @param documentRef - A reference to the document to be read.
     * @returns A `DocumentSnapshot` with the read data.
     */;
    }
    return t.prototype.get = function(t) {
        var e = this, n = Ju(t, this.ha), r = new du(this.ha);
        return this.al.Wa([ n.la ]).then((function(t) {
            if (!t || 1 !== t.length) return O();
            var i = t[0];
            if (i instanceof In) return new Uo(e.ha, r, n.la, null, n.fa);
            if (i instanceof Nn) return new Uo(e.ha, r, i.key, i, n.fa);
            throw O();
        }));
    }, t.prototype.set = function(t, e, n) {
        var r = Ju(t, this.ha), i = ms(r.fa, e, n), o = Iu(this.cl, "Transaction.set", r.la, i, null !== r.fa, n);
        return this.al.set(r.la, o), this;
    }, t.prototype.update = function(t, e, n) {
        for (var r = [], i = 3; i < arguments.length; i++) r[i - 3] = arguments[i];
        var o, u = Ju(t, this.ha);
        // For Compat types, we have to "extract" the underlying types before
        // performing validation.
                return e instanceof Do && (e = e.Ch), o = "string" == typeof e || e instanceof Mo ? Cu(this.cl, "Transaction.update", u.la, e, n, r) : Au(this.cl, "Transaction.update", u.la, e), 
        this.al.update(u.la, o), this;
    }, 
    /**
     * Deletes the document referred to by the provided {@link DocumentReference}.
     *
     * @param documentRef - A reference to the document to be deleted.
     * @returns This `Transaction` instance. Used for chaining method calls.
     */
    t.prototype.delete = function(t) {
        var e = Ju(t, this.ha);
        return this.al.delete(e.la), this;
    }, t;
}()), Zu = "You are using the memory-only build of Firestore. Persistence support is only available via the @firebase/firestore bundle or the firebase-firestore.js build.", ts = /** @class */ function() {
    function t() {}
    return t.prototype.enableIndexedDbPersistence = function(t, e) {
        throw new S(R.FAILED_PRECONDITION, Zu);
    }, t.prototype.enableMultiTabIndexedDbPersistence = function(t) {
        throw new S(R.FAILED_PRECONDITION, Zu);
    }, t.prototype.clearIndexedDbPersistence = function(t) {
        throw new S(R.FAILED_PRECONDITION, Zu);
    }, t;
}(), es = /** @class */ function(r) {
    function i(t, e, n) {
        var i = this;
        return (i = r.call(this, e) || this).ll = n, i.INTERNAL = {
            delete: function() {
                return i.terminate();
            }
        }, t instanceof N || (i._l = t), i;
    }
    return t(i, r), Object.defineProperty(i.prototype, "Qh", {
        get: function() {
            return this.Ch.Qh;
        },
        enumerable: !1,
        configurable: !0
    }), i.prototype.settings = function(t) {
        t.merge && 
        // Remove the property from the settings once the merge is completed
        delete (t = Object.assign(Object.assign({}, this.Ch.Yh()), t)).merge, this.Ch.Hh(t);
    }, i.prototype.useEmulator = function(t, e) {
        "firestore.googleapis.com" !== this.Ch.Yh().host && V("Host has been set in both settings() and useEmulator(), emulator host will be used"), 
        this.settings({
            host: t + ":" + e,
            ssl: !1,
            merge: !0
        });
    }, i.prototype.enableNetwork = function() {
        /**
 * Re-enables use of the network for this Firestore instance after a prior
 * call to {@link disableNetwork}.
 *
 * @returns A promise that is resolved once the network has been enabled.
 */
        return function(t) {
            /** Enables the network connection and re-enqueues all pending operations. */
            return function(t) {
                var r = this;
                return t.Ns.enqueue((function() {
                    return e(r, void 0, void 0, (function() {
                        var e, r;
                        return n(this, (function(n) {
                            switch (n.label) {
                              case 0:
                                return [ 4 /*yield*/ , Gu(t) ];

                              case 1:
                                return e = n.sent(), [ 4 /*yield*/ , Wu(t) ];

                              case 2:
                                return r = n.sent(), [ 2 /*return*/ , (e.Fc(!0), function(t) {
                                    var e = L(t);
                                    return e.Zr.delete(0 /* UserDisabled */), xr(e);
                                }(r)) ];
                            }
                        }));
                    }));
                }));
            }(ns(t = yo(t, xo)));
        }
        /**
 * Disables network usage for this instance. It can be re-enabled via {@link
 * enableNetwork}. While the network is disabled, any snapshot listeners,
 * `getDoc()` or `getDocs()` calls will return results from cache, and any write
 * operations will be queued until the network is restored.
 *
 * @returns A promise that is resolved once the network has been disabled.
 */ (this.Ch);
    }, i.prototype.disableNetwork = function() {
        return function(t) {
            return function(t) {
                var r = this;
                return t.Ns.enqueue((function() {
                    return e(r, void 0, void 0, (function() {
                        var r, i;
                        return n(this, (function(o) {
                            switch (o.label) {
                              case 0:
                                return [ 4 /*yield*/ , Gu(t) ];

                              case 1:
                                return r = o.sent(), [ 4 /*yield*/ , Wu(t) ];

                              case 2:
                                return i = o.sent(), [ 2 /*return*/ , (r.Fc(!1), function(t) {
                                    return e(this, void 0, void 0, (function() {
                                        var e;
                                        return n(this, (function(n) {
                                            switch (n.label) {
                                              case 0:
                                                return (e = L(t)).Zr.add(0 /* UserDisabled */), [ 4 /*yield*/ , Fr(e) ];

                                              case 1:
                                                return n.sent(), 
                                                // Set the OnlineState to Offline so get()s return from cache, etc.
                                                e.io.set("Offline" /* Offline */), [ 2 /*return*/ ];
                                            }
                                        }));
                                    }));
                                }(i)) ];
                            }
                        }));
                    }));
                }));
            }(ns(t = yo(t, xo)));
        }(this.Ch);
    }, i.prototype.enablePersistence = function(t) {
        var e = !1, n = !1;
        return t && fo("synchronizeTabs", e = !!t.synchronizeTabs, "experimentalForceOwningTab", n = !!t.experimentalForceOwningTab), 
        e ? this.ll.enableMultiTabIndexedDbPersistence(this) : this.ll.enableIndexedDbPersistence(this, n);
    }, i.prototype.clearPersistence = function() {
        return this.ll.clearIndexedDbPersistence(this);
    }, i.prototype.terminate = function() {
        return this.app._removeServiceInstance("firestore"), this.app._removeServiceInstance("firestore-exp"), 
        this.Ch._delete();
    }, i.prototype.waitForPendingWrites = function() {
        /**
 * Waits until all currently pending writes for the active user have been
 * acknowledged by the backend.
 *
 * The returned Promise resolves immediately if there are no outstanding writes.
 * Otherwise, the Promise waits for all previously issued writes (including
 * those written in a previous app session), but it does not wait for writes
 * that were added after the function is called. If you want to wait for
 * additional writes, call `waitForPendingWrites()` again.
 *
 * Any outstanding `waitForPendingWrites()` Promises are rejected during user
 * changes.
 *
 * @returns A Promise which resolves when all currently pending writes have been
 * acknowledged by the backend.
 */
        return function(t) {
            /**
 * Returns a Promise that resolves when all writes that were pending at the time
 * this method was called received server acknowledgement. An acknowledgement
 * can be either acceptance or rejection.
 */
            return function(t) {
                var r = this, i = new sr;
                return t.Ns.Ms((function() {
                    return e(r, void 0, void 0, (function() {
                        var e;
                        return n(this, (function(n) {
                            switch (n.label) {
                              case 0:
                                return e = Ui, [ 4 /*yield*/ , Yu(t) ];

                              case 1:
                                return [ 2 /*return*/ , e.apply(void 0, [ n.sent(), i ]) ];
                            }
                        }));
                    }));
                })), i.promise;
            }(ns(t = yo(t, xo)));
        }(this.Ch);
    }, i.prototype.onSnapshotsInSync = function(t) {
        return function(t, r) {
            return function(t, r) {
                var i = this, o = new ao(r);
                return t.Ns.Ms((function() {
                    return e(i, void 0, void 0, (function() {
                        var e;
                        return n(this, (function(n) {
                            switch (n.label) {
                              case 0:
                                return e = function(t, e) {
                                    L(t).fo.add(e), 
                                    // Immediately fire an initial event, indicating all existing listeners
                                    // are in-sync.
                                    e.next();
                                }, [ 4 /*yield*/ , Hu(t) ];

                              case 1:
                                return [ 2 /*return*/ , e.apply(void 0, [ n.sent(), o ]) ];
                            }
                        }));
                    }));
                })), function() {
                    o.bh(), t.Ns.Ms((function() {
                        return e(i, void 0, void 0, (function() {
                            var e;
                            return n(this, (function(n) {
                                switch (n.label) {
                                  case 0:
                                    return e = function(t, e) {
                                        L(t).fo.delete(e);
                                    }, [ 4 /*yield*/ , Hu(t) ];

                                  case 1:
                                    return [ 2 /*return*/ , e.apply(void 0, [ n.sent(), o ]) ];
                                }
                            }));
                        }));
                    }));
                };
            }(ns(t = yo(t, xo)), cr(r) ? r : {
                next: r
            });
        }(this.Ch, t);
    }, Object.defineProperty(i.prototype, "app", {
        get: function() {
            if (!this._l) throw new S(R.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
            return this._l;
        },
        enumerable: !1,
        configurable: !0
    }), i.prototype.collection = function(t) {
        try {
            return new ys(this, lu(this.Ch, t));
        } catch (t) {
            throw ss(t, "collection()", "Firestore.collection()");
        }
    }, i.prototype.doc = function(t) {
        try {
            return new us(this, pu(this.Ch, t));
        } catch (t) {
            throw ss(t, "doc()", "Firestore.doc()");
        }
    }, i.prototype.collectionGroup = function(t) {
        try {
            return new ps(this, function(t, e) {
                if (t = yo(t, _o), co("collectionGroup", "collection id", e), e.indexOf("/") >= 0) throw new S(R.INVALID_ARGUMENT, "Invalid collection ID '" + e + "' passed to function collectionGroup(). Collection IDs must not contain '/'.");
                return new $o(t, 
                /* converter= */ null, function(t) {
                    return new Cn(Q.X(), t);
                }(e));
            }(this.Ch, t));
        } catch (t) {
            throw ss(t, "collectionGroup()", "Firestore.collectionGroup()");
        }
    }, i.prototype.runTransaction = function(t) {
        var r = this;
        return function(t, r) {
            return function(t, r) {
                var i = this, o = new sr;
                return t.Ns.Ms((function() {
                    return e(i, void 0, void 0, (function() {
                        var e;
                        return n(this, (function(n) {
                            switch (n.label) {
                              case 0:
                                return [ 4 /*yield*/ , function(t) {
                                    return zu(t).then((function(t) {
                                        return t.Hr;
                                    }));
                                }(t) ];

                              case 1:
                                return e = n.sent(), new ju(t.Ns, e, r, o).run(), [ 2 /*return*/ ];
                            }
                        }));
                    }));
                })), o.promise;
            }(ns(t), (function(e) {
                return r(new $u(t, e));
            }));
        }(this.Ch, (function(e) {
            return t(new is(r, e));
        }));
    }, i.prototype.batch = function() {
        var t = this;
        return ns(this.Ch), new os(new Ku(this.Ch, (function(e) {
            return Xo(t.Ch, e);
        })));
    }, i;
}(Do);

/**
 * Executes the given `updateFunction` and then attempts to commit the changes
 * applied within the transaction. If any document read within the transaction
 * has changed, Cloud Firestore retries the `updateFunction`. If it fails to
 * commit after 5 attempts, the transaction fails.
 *
 * The maximum number of writes allowed in a single transaction is 500.
 *
 * @param firestore - A reference to the Firestore database to run this
 * transaction against.
 * @param updateFunction - The function to execute within the transaction
 * context.
 * @returns If the transaction completed successfully or was explicitly aborted
 * (the `updateFunction` returned a failed promise), the promise returned by the
 * `updateFunction `is returned here. Otherwise, if the transaction failed, a
 * rejected promise with the corresponding failure error is returned.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Constant used to indicate the LRU garbage collection should be disabled.
 * Set this value as the `cacheSizeBytes` on the settings passed to the
 * `Firestore` instance.
 */ function ns(t) {
    return t.Ea || rs(t), t.Ea.el(), t.Ea;
}

function rs(t) {
    var e = t.Jh(), n = function(t, e, n) {
        return new T(t, e, n.host, n.ssl, n.experimentalForceLongPolling, n.experimentalAutoDetectLongPolling);
    }(t.Qh, t.Uh, e);
    t.Ea = new Mu(t.jh, t.wa, n);
}

/**
 * A reference to a transaction.
 */ var is = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this, n) || this).ha = t, r;
    }
    return t(n, e), n.prototype.get = function(t) {
        var e = this, n = gs(t);
        return this.Ch.get(n).then((function(t) {
            return new fs(e.ha, t);
        }));
    }, n.prototype.set = function(t, e, n) {
        var r = gs(t);
        return n ? (ho("Transaction.set", n), this.Ch.set(r, e, n)) : this.Ch.set(r, e), 
        this;
    }, n.prototype.update = function(t, e, n) {
        for (var i, o = [], u = 3; u < arguments.length; u++) o[u - 3] = arguments[u];
        var s = gs(t);
        return 2 === arguments.length ? this.Ch.update(s, e) : (i = this.Ch).update.apply(i, r([ s, e, n ], o)), 
        this;
    }, n.prototype.delete = function(t) {
        var e = gs(t);
        return this.Ch.delete(e), this;
    }, n;
}(Do), os = /** @class */ function(e) {
    function n() {
        return null !== e && e.apply(this, arguments) || this;
    }
    return t(n, e), n.prototype.set = function(t, e, n) {
        var r = gs(t);
        return n ? (ho("WriteBatch.set", n), this.Ch.set(r, e, n)) : this.Ch.set(r, e), 
        this;
    }, n.prototype.update = function(t, e, n) {
        for (var i, o = [], u = 3; u < arguments.length; u++) o[u - 3] = arguments[u];
        var s = gs(t);
        return 2 === arguments.length ? this.Ch.update(s, e) : (i = this.Ch).update.apply(i, r([ s, e, n ], o)), 
        this;
    }, n.prototype.delete = function(t) {
        var e = gs(t);
        return this.Ch.delete(e), this;
    }, n.prototype.commit = function() {
        return this.Ch.commit();
    }, n;
}(Do), us = /** @class */ function(i) {
    function o(t, e) {
        var n = this;
        return (n = i.call(this, e) || this).firestore = t, n.aa = new So(t), n;
    }
    return t(o, i), o.fl = function(t, e, n) {
        if (t.length % 2 != 0) throw new S(R.INVALID_ARGUMENT, "Invalid document reference. Document references must have an even number of segments, but " + t.Y() + " has " + t.length);
        return new o(e, new Jo(e.Ch, n, new J(t)));
    }, o.ca = function(t, e, n) {
        return new o(e, new Jo(e.Ch, n, t));
    }, Object.defineProperty(o.prototype, "id", {
        get: function() {
            return this.Ch.id;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(o.prototype, "parent", {
        get: function() {
            return new ys(this.firestore, this.Ch.parent);
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(o.prototype, "path", {
        get: function() {
            return this.Ch.path;
        },
        enumerable: !1,
        configurable: !0
    }), o.prototype.collection = function(t) {
        try {
            return new ys(this.firestore, lu(this.Ch, t));
        } catch (t) {
            throw ss(t, "collection()", "DocumentReference.collection()");
        }
    }, o.prototype.isEqual = function(t) {
        return t instanceof Do && (t = t.Ch), t instanceof Jo && vu(this.Ch, t);
    }, o.prototype.set = function(t, e) {
        e = ho("DocumentReference.set", e);
        try {
            return function(t, e, n) {
                t = yo(t, Jo);
                var r = yo(t.firestore, xo), i = ms(t.fa, e, n);
                return Xo(r, Iu(gu(r), "setDoc", t.la, i, null !== t.fa, n).Pa(t.la, nn.ce()));
            }(this.Ch, t, e);
        } catch (t) {
            throw ss(t, "setDoc()", "DocumentReference.set()");
        }
    }, o.prototype.update = function(t, e) {
        for (var n = [], i = 2; i < arguments.length; i++) n[i - 2] = arguments[i];
        try {
            return 1 === arguments.length ? Ho(this.Ch, t) : Ho.apply(void 0, r([ this.Ch, t, e ], n));
        } catch (t) {
            throw ss(t, "updateDoc()", "DocumentReference.update()");
        }
    }, o.prototype.delete = function() {
        return Xo(yo((t = this.Ch).firestore, xo), [ new gn(t.la, nn.ce()) ]);
        var t;
        /**
 * Add a new document to specified `CollectionReference` with the given data,
 * assigning it a document ID automatically.
 *
 * @param reference - A reference to the collection to add this document to.
 * @param data - An Object containing the data for the new document.
 * @returns A Promise resolved with a `DocumentReference` pointing to the
 * newly created document after it has been written to the backend (Note that it
 * won't resolve while you're offline).
 */    }, o.prototype.onSnapshot = function() {
        for (var t = this, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
        var r = as(e), i = cs(e, (function(e) {
            return new fs(t.firestore, new Fo(t.firestore.Ch, t.aa, e.la, e._a, e.metadata, t.Ch.fa));
        }));
        return Qo(this.Ch, r, i);
    }, o.prototype.get = function(t) {
        var r = this;
        return ("cache" === (null == t ? void 0 : t.source) ? function(t) {
            t = yo(t, Jo);
            var r = yo(t.firestore, xo), i = ns(r), o = new Yo(r);
            return function(t, r) {
                var i = this, o = new sr;
                return t.Ns.Ms((function() {
                    return e(i, void 0, void 0, (function() {
                        var i;
                        return n(this, (function(u) {
                            switch (u.label) {
                              case 0:
                                return i = function(t, r, i) {
                                    return e(this, void 0, void 0, (function() {
                                        var e, o, u;
                                        return n(this, (function(n) {
                                            switch (n.label) {
                                              case 0:
                                                return n.trys.push([ 0, 2, , 3 ]), [ 4 /*yield*/ , function(t, e) {
                                                    var n = L(t);
                                                    return n.persistence.runTransaction("read document", "readonly", (function(t) {
                                                        return n.bi.Ge(t, e);
                                                    }));
                                                }(t, r) ];

                                              case 1:
                                                return (e = n.sent()) instanceof Nn ? i.resolve(e) : e instanceof In ? i.resolve(null) : i.reject(new S(R.UNAVAILABLE, "Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)")), 
                                                [ 3 /*break*/ , 3 ];

                                              case 2:
                                                return o = n.sent(), u = mr(o, "Failed to get document '" + r + " from cache"), 
                                                i.reject(u), [ 3 /*break*/ , 3 ];

                                              case 3:
                                                return [ 2 /*return*/ ];
                                            }
                                        }));
                                    }));
                                }, [ 4 /*yield*/ , Bu(t) ];

                              case 1:
                                return [ 2 /*return*/ , i.apply(void 0, [ u.sent(), r, o ]) ];
                            }
                        }));
                    }));
                })), o.promise;
            }(i, t.la).then((function(e) {
                return new Fo(r, o, t.la, e, new hs(e instanceof Nn && e.he, 
                /* fromCache= */ !0), t.fa);
            }));
        }
        /**
 * Reads the document referred to by this `DocumentReference` from the server.
 * Returns an error if the network is not available.
 *
 * @returns A Promise resolved with a `DocumentSnapshot` containing the
 * current document contents.
 */
        /**
 * Executes the query and returns the results as a `QuerySnapshot` from cache.
 * Returns an error if the document is not currently cached.
 *
 * @returns A Promise that will be resolved with the results of the query.
 */ (this.Ch) : "server" === (null == t ? void 0 : t.source) ? function(t) {
            t = yo(t, Jo);
            var e = yo(t.firestore, xo);
            return Qu(ns(e), t.la, {
                source: "server"
            }).then((function(n) {
                return Ko(e, t, n);
            }));
        }(this.Ch) : function(t) {
            t = yo(t, Jo);
            var e = yo(t.firestore, xo);
            return Qu(ns(e), t.la).then((function(n) {
                return Ko(e, t, n);
            }));
        }(this.Ch)).then((function(t) {
            return new fs(r.firestore, new Fo(r.firestore.Ch, r.aa, t.la, t._a, t.metadata, r.Ch.fa));
        }));
    }, o.prototype.withConverter = function(t) {
        return new o(this.firestore, this.Ch.withConverter(t));
    }, o;
}(Do);

/**
 * Replaces the function name in an error thrown by the firestore-exp API
 * with the function names used in the classic API.
 */
function ss(t, e, n) {
    return t.message = t.message.replace(e, n), t
    /**
 * Iterates the list of arguments from an `onSnapshot` call and returns the
 * first argument that may be an `SnapshotListenOptions` object. Returns an
 * empty object if none is found.
 */;
}

function as(t) {
    for (var e = 0, n = t; e < n.length; e++) {
        var r = n[e];
        if ("object" == typeof r && !cr(r)) return r;
    }
    return {};
}

/**
 * Creates an observer that can be passed to the firestore-exp SDK. The
 * observer converts all observed values into the format expected by the classic
 * SDK.
 *
 * @param args - The list of arguments from an `onSnapshot` call.
 * @param wrapper - The function that converts the firestore-exp type into the
 * type used by this shim.
 */ function cs(t, e) {
    var n, r, i;
    return {
        next: function(t) {
            i.next && i.next(e(t));
        },
        error: null === (n = (i = cr(t[0]) ? t[0] : cr(t[1]) ? t[1] : "function" == typeof t[0] ? {
            next: t[0],
            error: t[1],
            complete: t[2]
        } : {
            next: t[1],
            error: t[2],
            complete: t[3]
        }).error) || void 0 === n ? void 0 : n.bind(i),
        complete: null === (r = i.complete) || void 0 === r ? void 0 : r.bind(i)
    };
}

/**
 * Metadata about a snapshot, describing the state of the snapshot.
 */ var hs = /** @class */ function() {
    /** @hideconstructor */
    function t(t, e) {
        this.hasPendingWrites = t, this.fromCache = e
        /**
     * Returns true if this `SnapshotMetadata` is equal to the provided one.
     *
     * @param other - The `SnapshotMetadata` to compare against.
     * @returns true if this `SnapshotMetadata` is equal to the provided one.
     */;
    }
    return t.prototype.isEqual = function(t) {
        return this.hasPendingWrites === t.hasPendingWrites && this.fromCache === t.fromCache;
    }, t;
}(), fs = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this, n) || this).ha = t, r;
    }
    return t(n, e), Object.defineProperty(n.prototype, "ref", {
        get: function() {
            return new us(this.ha, this.Ch.ref);
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(n.prototype, "id", {
        get: function() {
            return this.Ch.id;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(n.prototype, "metadata", {
        get: function() {
            return this.Ch.metadata;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(n.prototype, "exists", {
        get: function() {
            return this.Ch.exists();
        },
        enumerable: !1,
        configurable: !0
    }), n.prototype.data = function(t) {
        return this.Ch.data(t);
    }, n.prototype.get = function(t, e) {
        return this.Ch.get(t, e);
    }, n.prototype.isEqual = function(t) {
        return Wo(this.Ch, t.Ch);
    }, n;
}(Do), ls = /** @class */ function(e) {
    function n() {
        return null !== e && e.apply(this, arguments) || this;
    }
    return t(n, e), n.prototype.data = function(t) {
        return this.Ch.data(t);
    }, n;
}(fs), ps = /** @class */ function(r) {
    function i(t, e) {
        var n = this;
        return (n = r.call(this, e) || this).firestore = t, n.aa = new So(t), n;
    }
    return t(i, r), i.prototype.where = function(t, e, n) {
        try {
            // The "as string" cast is a little bit of a hack. `where` accepts the
            // FieldPath Compat type as input, but is not typed as such in order to
            // not expose this via our public typings file.
            return new i(this.firestore, tu(this.Ch, function(t, e, n) {
                var r = e, i = jo("where", t);
                return new eu(i, r, n);
            }(t, e, n)));
        } catch (t) {
            throw ss(t, /(orderBy|where)\(\)/, "Query.$1()");
        }
    }, i.prototype.orderBy = function(t, e) {
        try {
            // The "as string" cast is a little bit of a hack. `orderBy` accepts the
            // FieldPath Compat type as input, but is not typed as such in order to
            // not expose this via our public typings file.
            return new i(this.firestore, tu(this.Ch, function(t, e) {
                void 0 === e && (e = "asc");
                var n = e, r = jo("orderBy", t);
                return new nu(r, n);
            }(t, e)));
        } catch (t) {
            throw ss(t, /(orderBy|where)\(\)/, "Query.$1()");
        }
    }, i.prototype.limit = function(t) {
        try {
            return new i(this.firestore, tu(this.Ch, function(t) {
                return go("limit", t), new ru("limit", t, "F" /* First */);
            }(t)));
        } catch (t) {
            throw ss(t, "limit()", "Query.limit()");
        }
    }, i.prototype.limitToLast = function(t) {
        try {
            return new i(this.firestore, tu(this.Ch, function(t) {
                return go("limitToLast", t), new ru("limitToLast", t, "L" /* Last */);
            }(t)));
        } catch (t) {
            throw ss(t, "limitToLast()", "Query.limitToLast()");
        }
    }, i.prototype.startAt = function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        try {
            return new i(this.firestore, tu(this.Ch, function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                return new iu("startAt", t, /*before=*/ !0);
            }.apply(void 0, t)));
        } catch (t) {
            throw ss(t, "startAt()", "Query.startAt()");
        }
    }, i.prototype.startAfter = function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        try {
            return new i(this.firestore, tu(this.Ch, function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                return new iu("startAfter", t, 
                /*before=*/ !1);
            }.apply(void 0, t)));
        } catch (t) {
            throw ss(t, "startAfter()", "Query.startAfter()");
        }
    }, i.prototype.endBefore = function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        try {
            return new i(this.firestore, tu(this.Ch, function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                return new ou("endBefore", t, /*before=*/ !0);
            }.apply(void 0, t)));
        } catch (t) {
            throw ss(t, "endBefore()", "Query.endBefore()");
        }
    }, i.prototype.endAt = function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        try {
            return new i(this.firestore, tu(this.Ch, function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                return new ou("endAt", t, /*before=*/ !1);
            }.apply(void 0, t)));
        } catch (t) {
            throw ss(t, "endAt()", "Query.endAt()");
        }
    }, i.prototype.isEqual = function(t) {
        return yu(this.Ch, t.Ch);
    }, i.prototype.get = function(t) {
        var r = this;
        return ("cache" === (null == t ? void 0 : t.source) ? function(t) {
            t = yo(t, $o);
            var r = yo(t.firestore, xo), i = ns(r), o = new Yo(r);
            return function(t, r) {
                var i = this, o = new sr;
                return t.Ns.Ms((function() {
                    return e(i, void 0, void 0, (function() {
                        var i;
                        return n(this, (function(u) {
                            switch (u.label) {
                              case 0:
                                return i = function(t, r, i) {
                                    return e(this, void 0, void 0, (function() {
                                        var e, o, u, s, a, c;
                                        return n(this, (function(n) {
                                            switch (n.label) {
                                              case 0:
                                                return n.trys.push([ 0, 2, , 3 ]), [ 4 /*yield*/ , Pr(t, r, 
                                                /* usePreviousResults= */ !0) ];

                                              case 1:
                                                return e = n.sent(), o = new Ii(r, e.nr), u = o.lu(e.documents), s = o.du(u, 
                                                /* updateLimboDocuments= */ !1), i.resolve(s.snapshot), [ 3 /*break*/ , 3 ];

                                              case 2:
                                                return a = n.sent(), c = mr(a, "Failed to execute query '" + r + " against cache"), 
                                                i.reject(c), [ 3 /*break*/ , 3 ];

                                              case 3:
                                                return [ 2 /*return*/ ];
                                            }
                                        }));
                                    }));
                                }, [ 4 /*yield*/ , Bu(t) ];

                              case 1:
                                return [ 2 /*return*/ , i.apply(void 0, [ u.sent(), r, o ]) ];
                            }
                        }));
                    }));
                })), o.promise;
            }(i, t.Ra).then((function(e) {
                return new Go(r, o, t, e);
            }));
        }(this.Ch) : "server" === (null == t ? void 0 : t.source) ? function(t) {
            t = yo(t, $o);
            var e = yo(t.firestore, xo), n = ns(e), r = new Yo(e);
            return Xu(n, t.Ra, {
                source: "server"
            }).then((function(n) {
                return new Go(e, r, t, n);
            }));
        }(this.Ch) : function(t) {
            t = yo(t, $o);
            var e = yo(t.firestore, xo), n = ns(e), r = new Yo(e);
            return hu(t.Ra), Xu(n, t.Ra).then((function(n) {
                return new Go(e, r, t, n);
            }));
        }(this.Ch)).then((function(t) {
            return new vs(r.firestore, new Go(r.firestore.Ch, r.aa, r.Ch, t.Ta));
        }));
    }, i.prototype.onSnapshot = function() {
        for (var t = this, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
        var r = as(e), i = cs(e, (function(e) {
            return new vs(t.firestore, new Go(t.firestore.Ch, t.aa, t.Ch, e.Ta));
        }));
        return Qo(this.Ch, r, i);
    }, i.prototype.withConverter = function(t) {
        return new i(this.firestore, this.Ch.withConverter(t));
    }, i;
}(Do), ds = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this, n) || this).ha = t, r;
    }
    return t(n, e), Object.defineProperty(n.prototype, "type", {
        get: function() {
            return this.Ch.type;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(n.prototype, "doc", {
        get: function() {
            return new ls(this.ha, this.Ch.doc);
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(n.prototype, "oldIndex", {
        get: function() {
            return this.Ch.oldIndex;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(n.prototype, "newIndex", {
        get: function() {
            return this.Ch.newIndex;
        },
        enumerable: !1,
        configurable: !0
    }), n;
}(Do), vs = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this, n) || this).ha = t, r;
    }
    return t(n, e), Object.defineProperty(n.prototype, "query", {
        get: function() {
            return new ps(this.ha, this.Ch.query);
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(n.prototype, "metadata", {
        get: function() {
            return this.Ch.metadata;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(n.prototype, "size", {
        get: function() {
            return this.Ch.size;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(n.prototype, "empty", {
        get: function() {
            return this.Ch.empty;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(n.prototype, "docs", {
        get: function() {
            var t = this;
            return this.Ch.docs.map((function(e) {
                return new ls(t.ha, e);
            }));
        },
        enumerable: !1,
        configurable: !0
    }), n.prototype.docChanges = function(t) {
        var e = this;
        return this.Ch.docChanges(t).map((function(t) {
            return new ds(e.ha, t);
        }));
    }, n.prototype.forEach = function(t, e) {
        var n = this;
        this.Ch.forEach((function(r) {
            t.call(e, new ls(n.ha, r));
        }));
    }, n.prototype.isEqual = function(t) {
        return Wo(this.Ch, t.Ch);
    }, n;
}(Do), ys = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this, t, n) || this).firestore = t, r.Ch = n, r;
    }
    return t(n, e), Object.defineProperty(n.prototype, "id", {
        get: function() {
            return this.Ch.id;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(n.prototype, "path", {
        get: function() {
            return this.Ch.path;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(n.prototype, "parent", {
        get: function() {
            var t = this.Ch.parent;
            return t ? new us(this.firestore, t) : null;
        },
        enumerable: !1,
        configurable: !0
    }), n.prototype.doc = function(t) {
        try {
            return new us(this.firestore, void 0 === t ? pu(this.Ch) : pu(this.Ch, t));
        } catch (t) {
            throw ss(t, "doc()", "CollectionReference.doc()");
        }
    }, n.prototype.add = function(t) {
        var e = this;
        return function(t, e) {
            var n = yo(t.firestore, xo), r = pu(t), i = ms(t.fa, e);
            return Xo(n, Iu(gu(t.firestore), "addDoc", r.la, i, null !== t.fa, {}).Pa(r.la, nn.exists(!1))).then((function() {
                return r;
            }));
        }(this.Ch, t).then((function(t) {
            return new us(e.firestore, t);
        }));
    }, n.prototype.isEqual = function(t) {
        return vu(this.Ch, t.Ch);
    }, n.prototype.withConverter = function(t) {
        return new n(this.firestore, this.Ch.withConverter(t));
    }, n;
}(ps);

function gs(t) {
    return t instanceof Do && (t = t.Ch), yo(t, Jo)
    /**
 * Converts custom model object of type T into DocumentData by applying the
 * converter if it exists.
 *
 * This function is used when converting user objects to DocumentData
 * because we want to provide the user with a more specific error message if
 * their set() or fails due to invalid data originating from a toFirestore()
 * call.
 */;
}

function ms(t, e, n) {
    // Cast to `any` in order to satisfy the union type constraint on
    // toFirestore().
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return t ? n && (n.merge || n.mergeFields) ? t.toFirestore(e, n) : t.toFirestore(e) : e;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// The objects that are a part of this API are exposed to third-parties as
// compiled javascript so we want to flag our private members with a leading
// underscore to discourage their use.
/**
 * A `FieldPath` refers to a field in a document. The path may consist of a
 * single field name (referring to a top-level field in the document), or a list
 * of field names (referring to a nested field in the document).
 */ var ws = /** @class */ function(e) {
    /**
     * Creates a FieldPath from the provided field names. If more than one field
     * name is provided, the path will point to a nested field in a document.
     *
     * @param fieldNames - A list of field names.
     */
    function n() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return e.call(this, new (Mo.bind.apply(Mo, r([ void 0 ], t)))) || this;
    }
    return t(n, e), n.documentId = function() {
        /**
         * Internal Note: The backend doesn't technically support querying by
         * document ID. Instead it queries by the entire document name (full path
         * included), but in the cases we currently support documentId(), the net
         * effect is the same.
         */
        return new n(K.nt().Y());
    }, n.prototype.isEqual = function(t) {
        return t instanceof Do && (t = t.Ch), t instanceof Mo && this.Ch.da.isEqual(t.da);
    }, n;
}(Do), bs = /** @class */ function(e) {
    function n() {
        return null !== e && e.apply(this, arguments) || this;
    }
    return t(n, e), n.serverTimestamp = function() {
        var t = new Eo("serverTimestamp");
        return t._methodName = "FieldValue.serverTimestamp", new n(t);
    }, n.delete = function() {
        var t = new wo("deleteField");
        return t._methodName = "FieldValue.delete", new n(t);
    }, n.arrayUnion = function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var r = 
        /**
 * Returns a special value that can be used with {@link setDoc} or {@link
 * updateDoc} that tells the server to union the given elements with any array
 * value that already exists on the server. Each specified element that doesn't
 * already exist in the array will be added to the end. If the field being
 * modified is not already an array it will be overwritten with an array
 * containing exactly the specified elements.
 *
 * @param elements - The elements to union into the array.
 * @returns The `FieldValue` sentinel for use in a call to `setDoc()` or
 * `updateDoc()`.
 */
        function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            // NOTE: We don't actually parse the data until it's used in set() or
            // update() since we'd need the Firestore instance to do this.
                        return new To("arrayUnion", t);
        }.apply(void 0, t);
        return r._methodName = "FieldValue.arrayUnion", new n(r);
    }, n.arrayRemove = function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var r = function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            // NOTE: We don't actually parse the data until it's used in set() or
            // update() since we'd need the Firestore instance to do this.
                        return new No("arrayRemove", t);
        }.apply(void 0, t);
        return r._methodName = "FieldValue.arrayRemove", new n(r);
    }, n.increment = function(t) {
        var e = function(t) {
            return new Io("increment", t);
        }(t);
        return e._methodName = "FieldValue.increment", new n(e);
    }, n.prototype.isEqual = function(t) {
        return this.Ch.isEqual(t.Ch);
    }, n;
}(Do), Es = {
    Firestore: es,
    GeoPoint: Ao,
    Timestamp: W,
    Blob: Lo,
    Transaction: is,
    WriteBatch: os,
    DocumentReference: us,
    DocumentSnapshot: fs,
    Query: ps,
    QueryDocumentSnapshot: ls,
    QuerySnapshot: vs,
    CollectionReference: ys,
    FieldPath: ws,
    FieldValue: bs,
    setLogLevel: function(t) {
        var e;
        e = t, A.setLogLevel(e);
    },
    CACHE_SIZE_UNLIMITED: -1
};

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Configures Firestore as part of the Firebase SDK by calling registerService.
 *
 * @param firebase - The FirebaseNamespace to register Firestore with
 * @param firestoreFactory - A factory function that returns a new Firestore
 *    instance.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Registers the memory-only Firestore build with the components framework.
 */
function Ts(t) {
    !function(t, e) {
        t.INTERNAL.registerComponent(new E("firestore", (function(t) {
            return function(t, e) {
                return new es(t, new xo(t, e), new ts);
            }(t.getProvider("app").getImmediate(), t.getProvider("auth-internal"));
        }), "PUBLIC" /* PUBLIC */).setServiceProps(Object.assign({}, Es)));
    }(t), t.registerVersion("@firebase/firestore", "2.0.5");
}

Ts(i);

export { Ts as __PRIVATE_registerFirestore };
//# sourceMappingURL=index.memory.esm.js.map
