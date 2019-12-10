exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        {
          VIN: "12345vvdfaf",
          make: "Jeep",
          model: "Cherokee",
          mileage: 5000,
          autoTrans: true,
          titleStatus: "clean"
        },
        {
          VIN: "3fvsvasv32324324",
          make: "Jeep",
          model: "Wrangler",
          mileage: 5000,
          autoTrans: false,
          titleStatus: "clean"
        },
        {
          VIN: "vdaf23324ffvvf",
          make: "Jeep",
          model: "Rubicon",
          mileage: 4443,
          autoTrans: false,
          titleStatus: "clean"
        }
      ]);
    });
};
