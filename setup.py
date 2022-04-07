import setuptools

with open("README.md", "r") as fh:
    long_description = fh.read()

setuptools.setup(
    name="streamlit_globe",
    version="0.2",
    author="Jonas Freiknecht",
    author_email="j.freiknecht@googlemail.com",
    description="An wrapper of the threeJS globe to display points and labels on a globe.",
    long_description=long_description,
    long_description_content_type='text/markdown',
    url="https://github.com/padmalcom/streamlit_globe",
    packages=setuptools.find_packages(),
    include_package_data=True,
    classifiers=[],
    python_requires=">=3.6",
    install_requires=[
        "streamlit >= 0.63",
    ],
)
