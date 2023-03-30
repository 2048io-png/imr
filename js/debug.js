const debug = {
  restart() {
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
  rage(x) {
    player.rp.unl = true;
    player.rp.points = E(`${x}`);
  },
};
