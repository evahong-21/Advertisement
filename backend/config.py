import os

mysql_config = {
    'host': os.environ.get('MYSQL_HOST', 'localhost'),
    'user': os.environ.get('MYSQL_USER', 'advertisement'),
    'pass': os.environ.get('MYSQL_PASS', '1111'),
    'db': os.environ.get('MYSQL_DB', 'advertisements'),
}


def alchemy_uri():
    return 'mysql://%s:%s@%s/%s?charset=utf8' % (
        mysql_config['user'], mysql_config['pass'], mysql_config['host'], mysql_config['db']
    )
