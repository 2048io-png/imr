const debug = {
  wipe() {
    wipe();
    player.offline.active = false;
    player.options.massDis = 1;
    player.options.notation = "sc";
    save();
  },
  confort() {
    player.offline.active = false;
    player.options.massDis = 1;
    player.options.notation = "sc";
    save();
  },
  mass(x) {
    player.mass = E(`${x}`);
  },
  rank(x) {
    player.ranks.rank = E(`${x}`);
  },
  tier(x) {
    player.ranks.tier = E(`${x}`);
  },
  tetr(x) {
    player.ranks.tetr = E(`${x}`);
  },
  rage(x) {
    player.rp.unl = true;
    player.rp.points = E(`${x}`);
  },
  bh(x) {
    player.bh.unl = true;
    player.bh.dm = E(`${x}`);
  },
};
window.onload(debug.confort());
