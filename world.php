<?php
$host = 'localhost';
$username = 'lab5_user';
$password = 'password123';
$dbname = 'world';

$conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);

$country= $_GET['country'];
$city= $_GET['context'];

$stmt=$conn->query("SELECT * FROM countries WHERE name LIKE '%$country%'");

$results = $stmt->fetchAll(PDO::FETCH_ASSOC);

?>
<?php if (!isset($city)){?>
  <?php if(isset($country)){?>
    <?php $country = trim(filter_var($country, FILTER_SANITIZE_STRING)); ?>
    <table id="countryData">
        <tr>
          <th><?= 'Name'; ?></th>
          <th><?= 'Continent'; ?></th>
          <th><?= 'Independence'; ?></th>
          <th><?= 'Head of State'; ?></th>
        </tr>
    <?php foreach ($results as $row){ ?>
            <tr>
            <td><?= $row['name'];?></td>
            <td><?= $row['continent']; ?></td>
            <td><?= $row['independence_year']; ?></td>
            <td><?= $row['head_of_state']; ?></td> 
          </tr>
    <?php } ?>
    </table>
  <?php } ?>
<?php }  ?>

<?php if (isset($city)){?>
  <?php
  $conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
  $findCity=$conn->query("SELECT cities.name,cities.district, cities.population FROM cities JOIN countries ON cities.country_code=countries.code WHERE countries.name LIKE '%$country%' " );
  $results = $findCity->fetchAll(PDO::FETCH_ASSOC);
  ?>
  <table id="cityData">
      <tr>
        <th><?= 'Name'; ?></th>
        <th><?= 'District'; ?></th>
        <th><?= 'Population'; ?></th>
      </tr>
  <?php foreach ($results as $row){?>
          <tr>
              <td><?= $row['name'];?></td>
              <td><?= $row['district']; ?></td>
              <td><?= $row['population']; ?></td>
          </tr>
        <?php } ?>

<?php } ?>

<!-- <ul>
<?php foreach ($results as $row): ?>
  <li><?= $row['name'] . ' is ruled by ' . $row['head_of_state']; ?></li>
<?php endforeach; ?>
</ul> -->