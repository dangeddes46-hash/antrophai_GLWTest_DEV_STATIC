export const storyArtManifest = {
  version: "antrophai-extended-story-art-pack-v0.1",
  note: "Concept/keeper art candidates for extended species story pages and Modern AntrophAI species bonus presentation. Images express doctrine; editable UI text states numbers.",
  species: {
    human: {
      folder: "human",
      hero: "/assets/story_art/human/futuristic_industrial_city_under_construction.png",
      heroRole: "Infrastructure Discipline / Systems of Survival",
      keeper: "/assets/story_art/human/dystopian_city_under_a_fractured_moon.png",
      keeperRole: "Scarred Moon / urban memory",
      gallery: [
        { src: "/assets/story_art/human/futuristic_industrial_city_under_construction.png", role: "Infrastructure Discipline / Systems of Survival", status: "keeper candidate" },
        { src: "/assets/story_art/human/dystopian_city_under_a_fractured_moon.png", role: "Scarred Moon / urban memory", status: "strong keeper candidate" },
        { src: "/assets/story_art/human/futuristic_cityscape_at_dawn.png", role: "Scarred Moon variant", status: "comparison" }
      ]
    },
    trysaur: {
      folder: "trysaur",
      hero: "/assets/story_art/trysaur/preparing_for_battle_in_fiery_fortress.png",
      heroRole: "War Drums / furnace-lit mustering",
      keeper: "/assets/story_art/trysaur/alien_army_prepares_for_assault.png",
      keeperRole: "Trysaur war-culture / mobilisation",
      gallery: [
        { src: "/assets/story_art/trysaur/preparing_for_battle_in_fiery_fortress.png", role: "War Drums / mustering", status: "keeper candidate" },
        { src: "/assets/story_art/trysaur/alien_army_prepares_for_assault.png", role: "Trysaur war-culture / mobilisation", status: "keeper candidate" },
        { src: "/assets/story_art/trysaur/futuristic_fleet_launching_from_a_carrier.png", role: "Fleet concept reference", status: "review; avoid too-human or too-missile bias" }
      ]
    },
    relu: {
      folder: "relu",
      hero: "/assets/story_art/relu/sacred_hall_of_data_and_light.png",
      heroRole: "ArcHive / Preservation Doctrine",
      keeper: "/assets/story_art/relu/sacred_assembly_in_a_futuristic_temple.png",
      keeperRole: "Soulcore restoration / responsible reconstruction",
      gallery: [
        { src: "/assets/story_art/relu/sacred_hall_of_data_and_light.png", role: "ArcHive", status: "keeper candidate" },
        { src: "/assets/story_art/relu/a_cosmic_temple_of_knowledge.png", role: "ArcHive variant", status: "keeper candidate" },
        { src: "/assets/story_art/relu/sacred_assembly_in_a_futuristic_temple.png", role: "Preservation Doctrine / restoration", status: "keeper candidate" }
      ]
    },
    lithi: {
      folder: "lithi",
      hero: "/assets/story_art/lithi/alien_hive_teeming_with_life.png",
      heroRole: "Brood Surge / lifecycle",
      keeper: "/assets/story_art/lithi/alien_swamp_with_fungal_hive_architecture.png",
      keeperRole: "Bek'stree / brood ecology",
      gallery: [
        { src: "/assets/story_art/lithi/alien_hive_teeming_with_life.png", role: "Brood Surge / lifecycle", status: "keeper candidate" },
        { src: "/assets/story_art/lithi/alien_swamp_with_fungal_hive_architecture.png", role: "Bek'stree", status: "keeper candidate" },
        { src: "/assets/story_art/lithi/alien_hive_of_writhing_larvae.png", role: "Brood Surge / mass emergence", status: "keeper candidate" }
      ]
    },
    zarth: {
      folder: "zarth",
      hero: "/assets/story_art/zarth/alien_volcanic_plains_with_glowing_rifts.png",
      heroRole: "Fissure Affinity / pressure seams",
      keeper: "/assets/story_art/zarth/otherworldly_volcanic_alien_landscape.png",
      keeperRole: "Teerok / coalescence",
      gallery: [
        { src: "/assets/story_art/zarth/alien_volcanic_plains_with_glowing_rifts.png", role: "Fissure Affinity", status: "keeper candidate" },
        { src: "/assets/story_art/zarth/otherworldly_volcanic_alien_landscape.png", role: "Teerok / coalescence", status: "keeper candidate" },
        { src: "/assets/story_art/zarth/alien_hive_in_glowing_cavern_depths.png", role: "Thermal City / membrane city", status: "review against canon" }
      ]
    }
  },
  sharedConflict: [
    { src: "/assets/story_art/shared_conflict/alien_swarm_vs_amorphous_entities.png", role: "Zarth vs Li'thi conflict", status: "big-screen review needed" }
  ]
};

export const modernSpeciesBonusCards = {
  human: {
    title: "Infrastructure Discipline",
    doctrine: "Command / logistics / adaptation",
    shortText: "Human construction systems are disciplined, redundant and well supplied. Buildings complete slightly faster.",
    mechanicalText: "+5% construction speed.",
    identityText: "Humanity survives by turning weakness into systems: standardised plans, supply chains, civic engineering doctrine and hard-won recovery practice."
  },
  trysaur: {
    title: "War Drums",
    doctrine: "Rhythm / pressure / mobilisation",
    shortText: "Completed boosted training orders build martial momentum. Trysaur speed-mineral training improves over time.",
    mechanicalText: "Boosted training scales from x2 toward x3. Maximum x3 is reached after 500 completed boosted training orders.",
    identityText: "Trysaur mobilisation is not panic. It is rhythm, pressure and ceremony, driving future musters harder as the war cadence builds."
  },
  lithi: {
    title: "Brood Surge",
    doctrine: "Emergence / brood pressure / lifecycle",
    shortText: "When speed minerals are used, Li'thi brood capacity expands by unit row. Lower forms can be produced in especially vast numbers.",
    mechanicalText: "Rows 1-2: 1999 x 10. Rows 3-5: 1999 x 4. Row 6: 1999 x 2.",
    identityText: "Li'thi training is not recruitment. It is emergence: the brood chamber surges, carrying mass production upward through the hive."
  },
  relu: {
    title: "Preservation Doctrine",
    doctrine: "Pattern / memory / responsible reconstruction",
    shortText: "Re'lu revive results are improved after normal revive calculation. Recovered patterns return more completely.",
    mechanicalText: "Revive result gains a 1.1x multiplier after normal revive calculation.",
    identityText: "To the Re'lu, loss is recorded, compared, restored and carried forward through ArcHive recovery and Soulcore continuity."
  },
  zarth: {
    title: "Fissure Affinity",
    doctrine: "Pressure / phase / mineral fissures",
    shortText: "Zarth mining output is increased. They draw matter from fissures, pressure states and unstable depths with unusual efficiency.",
    mechanicalText: "+20% mining output.",
    identityText: "Zarth extraction is not ordinary digging. It is pressure, phase and attention applied to the weak seams of matter."
  }
};
