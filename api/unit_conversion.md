In the data.json file, the following items need to have their units converted:

category_id | category_name | quantity | measurement_unit | water_consumption |
+-------------+---------------+----------+------------------+-------------------+
|           4 | Beer          |        1 | 250ml glass      |                74 |
|          11 | Egg           |        1 | egg              |               196 |
|          12 | Milk          |        1 | 250ml glass      |               255 |
|          15 | Pizza         |        1 | pizza            |              1239 |
|          20 | Tea           |        1 | 250ml glass      |                27 |
|          22 | Wine          |        1 | 250ml glass      |               109 |
+-------------+---------------+----------+------------------+-------------------

New values after conversion:
  category_id | category_name | quantity | measurement_unit | water_consumption | comments                            |
+-------------+---------------+----------+------------------+-------------------+-------------------------------------+
|           4 | Beer          |        1 | kg               |               296 | 74 * 4 = 296
|          11 | Egg           |        1 | kg               |              3267 | 1 egg on average is 60g.
|          12 | Milk          |        1 | kg               |              1020 | assuming 1ltr = 1kg
|          15 | Pizza         |        1 | kg               |              1239 | assuming 1 pizza = 1kg
|          20 | Tea           |        1 | kg               |              8991 | assuming 1 tea bag contains 3g tea
|          22 | Wine          |        1 | kg               |               436 | assuming 1ltr = 1kg