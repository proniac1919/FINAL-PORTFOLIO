import Form from '@/components/Form';

const Contact = () => {
  return (
    <section>
      <div className='container mx-auto'>
        {/* Text & Form Section */}
        <div className='grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24'>
          {/* Text Section */}
          <div className='flex flex-col justify-center'>
            <div className='flex items-center gap-x-4 text-primary text-lg mb-4'>
              <span className='w-[30px] h-[2px] bg-primary'></span>
              <div>Initialize Connection</div>
            </div>
            <h1 className='h1 max-w-md mb-8'>Ready to Architect Your Data?</h1>
            <p className='subtitle max-w-[400px]'>
              Whether it's building robust ETL pipelines, optimizing cloud infrastructure, or visualizing complex datasets — I'm ready to collaborate.
            </p>
          </div>

          {/* Form */}
          <div className="bg-secondary/30 backdrop-blur-sm p-8 rounded-xl border border-border/50 shadow-lg">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
