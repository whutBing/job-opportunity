CREATE TABLE IF NOT EXISTS role (
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(20) NOT NULL UNIQUE,
	intro VARCHAR(200),
	createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

SELECT * FROM role LIMIT 0, 10;


CREATE TABLE IF NOT EXISTS menu (
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(20) NOT NULL,
	type TINYINT(1),
	icon VARCHAR(20) NOT NULL,
	parentId INT DEFAULT NULL,
	url VARCHAR(50) UNIQUE,
	permission VARCHAR(100) UNIQUE,
	sort INT DEFAULT 100,
	createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	FOREIGN KEY(parentId) REFERENCES menu(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS `role_menu`(
	roleId INT NOT NULL,
	menuId INT NOT NULL,
	createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	PRIMARY KEY(roleId, menuId),
	FOREIGN KEY (roleId) REFERENCES role(id) ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY (menuId) REFERENCES menu(id) ON DELETE CASCADE ON UPDATE CASCADE
);


ALTER TABLE `user` ADD `role_id` INT;
ALTER TABLE `user` ADD FOREIGN KEY (role_id) REFERENCES role(id);

SELECT
	u.id id, u.name name,
	JSON_OBJECT("id", role.id, "name", role.name, "intro", role.intro) role
FROM user u
LEFT JOIN role ON role.id = u.role_id
WHERE u.id = 5;

SELECT 
	m1.id id, m1.name name, m1.type type, m1.url url, m1.icon icon, m1.sort sort, m1.createAt createAt, m1.updateAt updateAt,
	(SELECT JSON_ARRAYAGG(
		JSON_OBJECT("id", m2.id, "name", m2.name, "type", m2.type, "parentId", m2.parentId, "url", m2.url, "sort", m2.sort, "createAt", m2.createAt, "updateAt", m2.updateAt,
		"children", (SELECT JSON_ARRAYAGG(
			JSON_OBJECT("id", m3.id, "name", m3.name, "type", m3.type, "parentId", m3.parentId, "url", m3.url, "sort", m3.sort, "permission", m3.permission, "createAt", m3.createAt, "updateAt", m3.updateAt)
		) FROM menu m3 WHERE m3.parentId = m2.id ORDER BY m3.sort))
	) FROM menu m2 WHERE m1.id = m2.parentId ORDER BY m2.sort) children
FROM menu m1 
WHERE m1.type = 1;


SELECT
	r.id id, r.name name, r.intro intro,
	JSON_ARRAYAGG(rm.menuId) menuIds
FROM role r
LEFT JOIN role_menu rm ON r.id = rm.roleId
WHERE r.id = 2
GROUP BY rm.roleId;

