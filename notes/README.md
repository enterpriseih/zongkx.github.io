---
layout: Home
home: true
heroText: no
---

<!-- tabs:start -->

#### **宗阔雄Software😊**

| Uri                                                          |
| :----------------------------------------------------------- |
| [git1](https://git-scm.com/downloads)                        |
| [git2](https://repo.huaweicloud.com/git-for-windows/)        |
| [python1](https://www.python.org/downloads/)                 |
| [python2](https://repo.huaweicloud.com/python/)              |
| [jdk](https://repo.huaweicloud.com/java/jdk/)                |
| [vscode](https://code.visualstudio.com/)                     |
| [nodejs](http://nodejs.cn/download/)                         |
| [mongodb](https://www.mongodb.com/try/download/community)    |
| [mysql1](https://dev.mysql.com/downloads/installer/)         |
| [mysql2](https://repo.huaweicloud.com/mysql/Downloads/MySQLInstaller/) |
| [postgis](https://repo.huaweicloud.com/postgresql/postgis/)  |
| [win_redis](https://github.com/MicrosoftArchive/redis/releases) |
| [linux_redis](https://repo.huaweicloud.com/redis/)           |
| [AnotherRedisDesktopManager](https://github.com/qishibo/AnotherRedisDesktopManager/releases) |
| [idea(${idea.home.path})](https://www.jetbrains.com/zh-cn/idea/download/#section=windows) |
| [idea_license](http://idea.medeming.com/jets/)               |
| [NxShell](https://nxshell.github.io/)                        |
| [notepad++](https://notepad-plus-plus.org/downloads/)        |
| [chrome1](https://repo.huaweicloud.com/chromium-browser-snapshots/) |
| [chrome2](https://www.google.cn/intl/zh-CN/chrome/)          |
| [win10_runtime](http://www.pc6.com/softview/SoftView/_104246.html) |
| [wps](http://ncre.neea.edu.cn/html1/report/1507/861-1.htm)   |
| [bookmark hub](https://crxdl.com/storage/crx-file/Aa9P69TNAcxZPwRDt8rTMhDdBIep7XCF/fohimdklhhcpcnpmmichieidclgfdmol_v0.0.4.zip) |



#### **Doc😒**

| description           | doc                                                          |
| --------------------- | ------------------------------------------------------------ |
| 标准数据传输规范      | [CloudEvents](https://cloudevents.github.io/sdk-java/http-basic.html) |
| html画图              | [X6](https://x6.antv.vision/zh/docs/tutorial/intermediate/custom-node) |
| 基于Git的配置中心     | [Central Dogma](https://line.github.io/centraldogma/)        |
| 分析/API构建/查询加速 | [CubeJS](https://cube.dev/)                                  |
| markdown建站          | [Docsify](https://docsify.js.org/#/quickstart)               |
| 数据湖引擎            | [Dremio](https://docs.dremio.com/) |
| Java-Sql构建          | [SqlBuilder](https://openhms.sourceforge.io/sqlbuilder/example.html) |
| Java-Batch处理        | [EasyBatch](https://github1s.com/j-easy/easy-batch)          |
| 分布式调度平台        | [Xxl-job](https://www.xuxueli.com/xxl-job/)                  |
| Java-BeanCopy         | [Bean转换集合](https://github1s.com/fuzhengwei/guide-vo2dto/blob/HEAD/pom.xml) |
| 日志                  | [graylog](http://docs.graylog.org/en/2.4) |
|                       |                                                              |

#### **Docker😁**

| images/other     | commod                                                     | desc                                                 |
| --------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| openjdk:11   | docker run -d -it --name java-11 openjdk:11                  | docker exec -it {id}  /bin/bash                              |
| mysql:latest | docker run -itd --name mysql-test -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 mysql | Public Key Retrieval is not allowed: allowPublicKeyRetrieval=true |
| registry:2   | docker run -d -v /opt/registry:/var/lib/registry -p 5000:5000 --name myregistry registry:2 |                                                              |
|              |                                                              |                                                              |
|              |                                                              |                                                              |
| 日志查看     | docker logs -f --tail 500  {id}                              |                                                              |
| dockerfile   | docker build -t demoapp .                                    | FROM openjdk:11 EXPOSE 8091 ADD base-1.0.jar /base.jar ENTRYPOINT ["java", "-jar","/base.jar"] |
| mongo | docker run -d -p 27017:27017 --name mongodb1 -e MONGO_INITDB_ROOT_USERNAME=test -e MONGO_INITDB_ROOT_PASSWORD=123456789 -v $PWD/db:/data/db mongo |                                                              |
|              |                                                              |                                                              |
|              |                                                              |                                                              |
|              |                                                              |                                                              |
|                       |                                                              |                                                              |


#### **xml👍**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<settings xmlns="http://maven.apache.org/SETTINGS/1.2.0"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.2.0 https://maven.apache.org/xsd/settings-1.2.0.xsd">
  <localRepository>D:\dev\maven\rep</localRepository>
  <pluginGroups></pluginGroups>
  <proxies></proxies>
  <servers></servers>
  <mirrors>
    <mirror>
      <id>nexus-aliyun</id>
      <name>Nexus aliyun</name>
      <url>http://maven.aliyun.com/nexus/content/groups/public/</url>
      <mirrorOf>central</mirrorOf>
    </mirror>
  </mirrors>
  <profiles></profiles>
</settings>

```
```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.example</groupId>
    <artifactId>demo</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <name>demo</name>
    <description>Demo project for Spring Boot</description>

    <properties>
        <java.version>1.8</java.version>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>
        <spring-boot.version>2.5.5</spring-boot.version>
    </properties>

    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
        </dependency>
    </dependencies>

    <dependencyManagement>
        <dependencies>
            <dependency>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-dependencies</artifactId>
                <version>${spring-boot.version}</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>
        </dependencies>
    </dependencyManagement>

    <build>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <version>3.8.1</version>
                <configuration>
                    <source>1.8</source>
                    <target>1.8</target>
                    <encoding>UTF-8</encoding>
                </configuration>
            </plugin>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
                <version>2.5.5</version>
                <executions>
                    <execution>
                        <id>repackage</id>
                        <goals>
                            <goal>repackage</goal>
                        </goals>
                    </execution>
                </executions>
            </plugin>
        </plugins>
    </build>

</project>


```

#### **yml **

```yml
spring: # mysql-connector-java ( mybatis-spring-boot-starter / mybatis-plus-boot-starter / jpa )
  datasource:
    driver-class-name: com.mysql.cj.jdbc.Driver
    url: jdbc:mysql://127.0.0.1:3306/test?useSSL=false
    username: root
    password: 123456
  jpa: # 仅针对spring-boot-starter-data-jpa 
    database-platform: org.hibernate.dialect.MySQL8Dialect
    hibernate:
      ddl-auto: update
```

```yml
spring: # spring-boot-starter-data-mongodb
  data:
    mongodb:
      uri: mongodb://127.0.0.1:27017/test #无密码
      # uri: mongodb://admin:123456@127.0.0.1:27017/test #有密码
```



<!-- tabs:end -->

#### 
