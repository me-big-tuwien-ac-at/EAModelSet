from setuptools import setup

VERSION = '0.0.1'

setup(
    name='eamodelset',
    version=VERSION,
    description='Python library to access EA ModelSet',
    author='Philipp-Lorenz Glaser',
    packages=['eamodelset'],
    install_requires=[
        'pandas',
    ],
    package_data={"eamodelset":["dataset.zip"]}
)