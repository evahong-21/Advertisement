import os

mysql_config = {
    'host': os.environ.get('MYSQL_HOST', 'mariadb'),
    'user': os.environ.get('MYSQL_USER', 'ads'),
    'pass': os.environ.get('MYSQL_PASS', 'ads'),
    'db': os.environ.get('MYSQL_DB', 'ads'),
}


def alchemy_uri():
    return 'mysql+pymysql://%s:%s@%s/%s?charset=utf8' % (
        mysql_config['user'], mysql_config['pass'], mysql_config['host'], mysql_config['db']
    )
