<?php

echo navGroup(navItem('/theme/index.php', 'The Template'),
    navItem('/theme/alert.php', 'Alerts') .
    navItem('/theme/button.php', 'Buttons') .
    navItem('/theme/figcaption.php', 'Figure Caption') .
    navItem('/theme/flexible-grid.php', 'Flexible Grid') .
    navItem('/theme/form.php', 'Forms') .
    navItem('/theme/icons.php', 'Icons') .
    navItem('/theme/jumplist.php', 'Jump List') .
    navItem('/theme/list.php', 'Lists') .
    navItem('/theme/minimal.php', 'Minimal') .
    navItem('/theme/references.php', 'References') .
    navItem('/theme/table.php', 'Tables') .
    navItem('/theme/text.php', 'Text Level Semantics') .
    navItem('/theme/typography.php', 'Typography')
  );

echo navGroup(navItem('/theme/index.html', 'Second Navigation'),
    navItem('/theme/alert.html', 'Alerts') .
    navItem('/theme/button.html', 'Buttons') .
    navItem('/theme/figcaption.html', 'Figure Caption')
  );

echo navItem('/theme/content.php', 'Content Styles');
echo navItem('/theme/cooperator.php', 'Cooperator Logos');


