import { db, ref, set, get, onValue, update } from "./firebase.js";

/* ----------------------------
 LOGIN
-----------------------------*/
export function login(regno) {
    return update(ref(db, "competitors/" + regno), {
        regno: regno,
        status: "waiting",
        level: 0,
        startTime: 0,
        endTime: 0
    });
}

/* ----------------------------
 LISTEN FOR ADMIN START
-----------------------------*/
export function waitForStart(callback) {
    onValue(ref(db, "admin/start"), snap => {
        if (snap.exists() && snap.val() === true) {
            callback();
        }
    });
}

/* ----------------------------
 ADMIN START EVENT
-----------------------------*/
export function adminStart() {
    return set(ref(db, "admin/start"), true);
}

/* ----------------------------
 SAVE LEVEL TIME
-----------------------------*/
export function saveLevelTime(regno, level, timeTaken) {
    return update(ref(db, "competitors/" + regno), {
        ["level" + level]: timeTaken,
        status: level === 2 ? "finished" : "next"
    });
}

/* ----------------------------
 READ LEADERBOARD
-----------------------------*/
export function loadLeaderboard(callback) {
    onValue(ref(db, "competitors"), snap => {
        if (!snap.exists()) return;
        const data = snap.val();
        const arr = Object.values(data).map(x => ({
            regno: x.regno,
            total: (x.level1 || 9999) + (x.level2 || 9999)
        }));
        arr.sort((a, b) => a.total - b.total);
        callback(arr);
    });
}
