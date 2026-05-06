#include <bits/stdc++.h>
using namespace std;

/*
 * transitionTime is 1-indexed in the problem:
 *   transitionTime[i] = cost of the edge connecting hub i and hub i-1
 *   (with hub 0 wrapping to hub m)
 *
 * So the ring has edges:
 *   (hub 1, hub m)   -> transitionTime[1]
 *   (hub 1, hub 2)   -> transitionTime[2]
 *   ...
 *   (hub m-1, hub m) -> transitionTime[m]
 *
 * Clockwise distance from hub lo to hub hi (lo < hi):
 *   prefix[hi] - prefix[lo]
 * where prefix[i] = transitionTime[1] + ... + transitionTime[i]
 */

long computeMinDeliveryTime(vector<int> requestedHubs, vector<int> transitionTime) {
    int m = (int)transitionTime.size();

    // prefix[i] = sum of transitionTime[0..i-1] (0-indexed vector)
    vector<long> pre(m + 1, 0);
    for (int i = 0; i < m; i++)
        pre[i + 1] = pre[i] + transitionTime[i];

    long ring = pre[m]; // total circumference

    long result = 0;
    int pos = 1; // always start at hub 1

    for (int hub : requestedHubs) {
        if (hub == pos) continue;

        int lo = min(pos, hub);
        int hi = max(pos, hub);

        long cw  = pre[hi] - pre[lo];      // going clockwise between lo and hi
        long ccw = ring - cw;              // going the other way
        result  += min(cw, ccw);
        pos = hub;
    }

    return result;
}

// ─── input parsing / main ────────────────────────────────────────────────────

string ltrim(const string &s) {
    size_t start = s.find_first_not_of(" \t\r\n");
    return (start == string::npos) ? "" : s.substr(start);
}

string rtrim(const string &s) {
    size_t end = s.find_last_not_of(" \t\r\n");
    return (end == string::npos) ? "" : s.substr(0, end + 1);
}

vector<string> split(const string &s) {
    vector<string> tokens;
    istringstream ss(s);
    string tok;
    while (ss >> tok) tokens.push_back(tok);
    return tokens;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >> n;

    vector<int> requestedHubs(n);
    for (int i = 0; i < n; i++) cin >> requestedHubs[i];

    int m;
    cin >> m;

    vector<int> transitionTime(m);
    for (int i = 0; i < m; i++) cin >> transitionTime[i];

    cout << computeMinDeliveryTime(requestedHubs, transitionTime) << "\n";

    return 0;
}
