import os

mysql_config = {
    'host': os.environ.get('DB_HOST', 'mariadb'),
    'user': os.environ.get('DB_USERNAME', 'advertisement'),
    'pass': os.environ.get('DB_PASSWORD', '1111'),
    'db': os.environ.get('DB_DATABASE', 'advertisements'),
}


def alchemy_uri():
    return 'mysql+pymysql://%s:%s@%s/%s?charset=utf8' % (
        mysql_config['user'], mysql_config['pass'], mysql_config['host'], mysql_config['db']
    )
