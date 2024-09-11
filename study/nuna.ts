{
  type Monster = {
    name: string;
    location: string;
    skill: Skill;
  };

  type Skill = {
    name: string;
    level: number;
    damage: number;
  };

  type SkillSet = Omit<Skill, "damage">;
  type SkillDamage = Pick<Skill, "damage">;

  const monster: Monster = {
    name: "Monster",
    location: "Forest",
    skill: { name: "Fireball", level: 1, damage: 50 },
  };

  const skillSetList: SkillSet[] = [
    { name: "Fireball", level: 1 },
    { name: "Iceball", level: 2 },
  ];
  const skillDamageList: SkillDamage[] = [{ damage: 50 }, { damage: 70 }];

  console.log(monster);
  console.log(skillSetList);
  console.log(skillDamageList);

  interface BossMonster extends Monster {
    dropItem: string;
  }

  const bossMonster: BossMonster = {
    name: "Boss",
    location: "Dungeon",
    skill: { name: "Fireball", level: 3, damage: 100 },
    dropItem: "Gold",
  };
}
