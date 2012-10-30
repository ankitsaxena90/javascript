(i)
mysql> select shape,color,
    -> case shape
    -> when 'triangle' THEN 1.732/4*side1*side1
    -> when 'circle' THEN 3.14*side1*side1
    -> when 'square' THEN side1*side1
    -> else side1*side2
    -> end as area
    -> from blocks
    -> order by id;
+-----------+--------+------------+
| shape     | color  | area       |
+-----------+--------+------------+
| triangle  | red    | 10.8250000 |
| square    | red    |         25 |
| rectangle | red    |          8 |
| circle    | red    |      78.50 |
| circle    | blue   |      12.56 |
| square    | blue   |         49 |
| square    | yellow |         64 |
| triangle  | yellow |  1.7320000 |
| triangle  | blue   |  3.8970000 |
| circle    | green  |     314.00 |
| square    | green  |          1 |
| square    | cyan   |         16 |
| rectangle | cyan   |         56 |
| rectangle | yellow |         10 |
| rectangle | white  |         20 |
| circle    | white  |      50.24 |
+-----------+--------+------------+
16 rows in set (0.00 sec)




(ii)
mysql> select shape,color,
    -> case shape
    -> when 'triangle' THEN sum(1.732/4*side1*side1)
    -> when 'circle' THEN sum(3.14*side1*side1)
    -> when 'square' THEN sum(side1*side1)
    -> else sum(side1*side2)
    -> end as area
    -> from blocks
    -> group by shape;
+-----------+-------+------------+
| shape     | color | area       |
+-----------+-------+------------+
| circle    | red   |     455.30 |
| rectangle | red   |         94 |
| square    | red   |        155 |
| triangle  | red   | 16.4540000 |
+-----------+-------+------------+
4 rows in set (0.00 sec)



(iii)
mysql> select bq.block_id,shape,color,
    -> case shape
    -> when 'triangle' then bq.qty*(1.732/4*side1*side1)
    -> when 'circle' then bq.qty*(3.14*side1*side1)
    -> when 'square' then bq.qty*(side1*side1)
    -> else bq.qty*(side1*side2)
    -> end as area
    -> from blocks b
    -> left join block_qty bq
    -> on bq.block_id = b.id
    -> group by b.id;
+----------+-----------+--------+--------------+
| block_id | shape     | color  | area         |
+----------+-----------+--------+--------------+
|        1 | triangle  | red    |   75.7750000 |
|        2 | square    | red    |  125.0000000 |
|        3 | rectangle | red    |   24.0000000 |
|        4 | circle    | red    |  157.0000000 |
|        5 | circle    | blue   |    0.0000000 |
|        6 | square    | blue   |  245.0000000 |
|        7 | square    | yellow |  320.0000000 |
|        8 | triangle  | yellow |   13.8560000 |
|        9 | triangle  | blue   |   15.5880000 |
|       10 | circle    | green  | 2512.0000000 |
|       11 | square    | green  |    8.0000000 |
|       12 | square    | cyan   |   96.0000000 |
|       13 | rectangle | cyan   |  336.0000000 |
|       14 | rectangle | yellow |   10.0000000 |
|       15 | rectangle | white  |  140.0000000 |
|     NULL | circle    | white  |         NULL |
+----------+-----------+--------+--------------+
16 rows in set (0.00 sec)
